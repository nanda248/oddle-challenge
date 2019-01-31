import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import '../assets/styles/mainPage.css';
import '../assets/styles/styles.scss'
import '../App.css';
import {fetchUsers, setLoadingSpinner} from '../actions';

import LoadingSpinner from './loadingSpinner';

class MainLayoutPage extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: '',
            activePage: 1
        }
        this.handleSearchValue = this.handleSearchValue.bind(this)
    }

    handleSearchValue(event) {
        const value = event.target.value;
        this.setState({searchValue: value, activePage: 1})
        this.props.setLoadingSpinner(true)
        this.props.fetchUsers(value)
    }

    renderPagination(users) {
        const usersSize = users.length;
        const {activePage} = this.state;
        const numOfPages = _.ceil(_.divide(usersSize, 12))
        console.log("num of pages", numOfPages)
        const item = [];
        for(let i=1 ; i<=numOfPages ; i++) {
            let color = activePage===i ? '#E8DC9F' : '#EBEAEB'
            item.push(
                <div className="pagination" key={i} style={{backgroundColor: color}}>
                    <a href="#" onClick={() => this.setState({activePage: i})}>{i}</a>
                </div>
            )
        }
        return item;
    }

    renderUsers(users) {
        const {activePage} = this.state;
        const start = (13*(activePage-1));
        const end = (13 * (activePage-1)) + 12;
        console.log("active page start and end: ", start , end)
        return users.slice(start, end).map((user) => {
            return (
                <div className="col s3" key={user.id}>
                <div className="card z-depth-4 user-card">
                    <div className="card-content white-text">
                        <img src={user.avatar_url} className="circle" alt="user_avatar" height="40"/>
                        <span className="card-title">{user.login}</span>
                        <Link to={`user/${user.id}`}>More Details</Link>
                    </div>
                    <div className="card-action" style={{fontSize: '0.8em'}}>
                        <a href={user.html_url}>Github Link</a>
                    </div>
                </div>
                </div>
            )
        })
    }

    render() {
        const { users, spinnerStatus, errorMessage } = this.props;
        console.log("active page now: ", this.state.activePage)
        // console.log("spinner status and msg: ", spinnerStatus, errorMessage)
        return (
            <div className="container">
            <div className="row">           
            <div className="input-field col s12">               
                <i className="material-icons prefix">search</i>
                <input id="search_image" type="text" onChange={this.handleSearchValue} value={this.state.searchValue}/>
                <label htmlFor="search_image">Start Searching For Github Users!</label>
            </div>

            {spinnerStatus===true ? <LoadingSpinner /> : ''}
            <div className="row">
                {
                    errorMessage === null ? this.renderUsers(users) :<h4>{errorMessage}</h4>
                }
            <center>
                {this.renderPagination(users)}
            </center>
            </div>
            
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        spinnerStatus: state.loadingSpinnerStatus,
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps,{fetchUsers, setLoadingSpinner})(MainLayoutPage);
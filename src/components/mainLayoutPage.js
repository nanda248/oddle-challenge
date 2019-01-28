import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/scss/styles.scss'
import '../App.css';
import {fetchUsers, setLoadingSpinner} from '../actions';

import LoadingSpinner from './loadingSpinner';

class MainLayoutPage extends Component {

    constructor() {
        super()
        this.state = {
            searchValue: ''
        }
        this.handleSearchValue = this.handleSearchValue.bind(this)
    }

    handleSearchValue(event) {
        const value = event.target.value;
        this.setState({searchValue: value})
        this.props.setLoadingSpinner(true)
        this.props.fetchUsers(value)
    }

    renderUsers(users) {
        return users.slice(0,12).map((user) => {
            return (
                <div className="col s3" key={user.id}>
                <div className="card teal darken-3 z-depth-4">
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
        console.log("spinner status and msg: ", spinnerStatus, errorMessage)
        return (
            <div className="container">
            <div className="row">           
            <div className="input-field col s12">               
                <i className="material-icons prefix">search</i>
                <input id="search_image" type="text" onChange={this.handleSearchValue} value={this.state.searchValue}/>
                <label htmlFor="search_image">Start Searching For Github Users!</label>
            </div>
            <LoadingSpinner name="main"/>
            {spinnerStatus===true ? <LoadingSpinner name="main"/> : ''}
            <div className="row">
                {
                    errorMessage === null ? this.renderUsers(users) :<h4>{errorMessage}</h4>
                }
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
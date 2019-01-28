import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchSingleUser} from '../actions'
import LoadingSpinner from './loadingSpinner';
import '../App.css';

class SingleUserPage extends Component {

    componentDidMount() {
        this.props.fetchSingleUser(this.props.match.params.id)
    }
    
    render() {
        const { user } = this.props;
        console.log("this props in single user page: ", this.props.match.params)
        console.log("single user: ", this.props.user)
        return (
            <div className="container row">
                
                { user === null ? "Loading..." : 
                <ul className="collection with-header col s12">
                    <li className="collection-header">
                        <img src={user.avatar_url} className="circle" alt="user_avatar" height="100"/>
                        <h4>Login: {user.login} <br/>Name: {user.name}</h4> 
                    </li>
                    <li class="collection-item">
                        <a href={user.html_url}>Github Link</a>
                    </li>
                    <li class="collection-item">
                        <a href={user.repos_url}>Repository Link</a>
                    </li>
                    <li class="collection-item">
                        <a href={user.followers_url}>List of Followers</a>
                    </li>
                    <li class="collection-item">
                        <div>Email<div class="secondary-content">{user.email ? user.email : <span style={{color: 'orange'}}>nil</span>}</div></div>
                    </li>
                    <li class="collection-item">
                        <div>Bio<div class="secondary-content">{user.bio ? user.bio : <span style={{color: 'orange'}}>nil</span>}</div></div>
                    </li>
                </ul>
                }
                <LoadingSpinner name="single"/> 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.singleUser
    }
}

export default connect(mapStateToProps, {fetchSingleUser})(SingleUserPage);
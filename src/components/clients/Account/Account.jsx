import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/userActions';
import MyService from '../MyService/MyService';
import Profile from '../Profile/Profile'
import './Account.css'

class Account extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { users, auth } = this.props;
        return (
            <div className="account">
                <h2>MY ACCOUNT</h2>
                <h4 className="my-serv">MY SERVICES:</h4>
                {auth ? (
                    <ul>
                        {users.map(user => (user!==undefined&&user.auth === true)?
                                (<MyService key={ user.id } 
                                user={ user }
                                />):null)} 
                            </ul>
                ): null}
                <h4 className="my-serv">EDIT PROFILE:</h4>
                {auth ? (
                    <ul>
                        {users.map(user => (user!==undefined&&user.auth === true)?
                                (<Profile key={ user.id } 
                                user={ user }
                                />):null)} 
                            </ul>
                ): null}
               
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.users
})

export default connect(mapStateToProps, { getUsers })(Account);

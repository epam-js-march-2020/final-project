import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../Utils/Button';
import List from '../List/List';
import UserInfoEdit from './UserInfoEdit';
import {connect} from 'react-redux';
import {userInfoEdit, saveUserInfo, cancelEdit} from '../../actions/actions';

class ProfilePage extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className='office'>
                    <div className='office__header'>
                        <h2 className='office__title'>Your profile</h2>
                        <Button type={'button'} buttonText={'LogOut'} onClick={this.props.onLogOff}/>
                    </div>
                    {this.props.infoEdit ?
                        <UserInfoEdit userName={this.props.userName}
                                      userEmail={this.props.userEmail}
                                      saveUserInfo={this.props.saveUserInfo}
                                      cancelEdit={this.props.cancelEdit}/>
                                      :
                        <div className='office__user-info'>
                            <p className='office__text'>Name: <span className='office__info'>{this.props.userName}</span></p>
                            <p className='office__text'>Email: <span className='office__info'>{this.props.userEmail}</span></p>
                            <Button type={'button'} buttonText={'Edit'} onClick={this.props.userInfoEdit}/>
                        </div>}
                    <div className='office__header'>
                        <h2 className='office__title'>Your appointments:</h2>
                    </div>
                    <List/>
                </div>
            );
        }
        return <Redirect to='/login'/>
    }
}

const mapStateToProps = ({infoEdit, userName, userEmail}) => {
    return {
        infoEdit,
        userName,
        userEmail
    };
};

export default connect(mapStateToProps, { userInfoEdit, saveUserInfo, cancelEdit })(ProfilePage);
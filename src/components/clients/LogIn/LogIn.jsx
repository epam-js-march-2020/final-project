import React, { Component } from 'react';
import Textinput from '../../layout/TextInput/TextInput';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './LogIn.css';
import { getUsers, checkUser} from '../../../actions/userActions';

class LogIn extends Component {
    componentDidMount() {
        this.props.getUsers()
    }
    state = {
        email: '',
        password: '',
        // isAuthenticated: false
    };

    onSubmit = e => {
        e.preventDefault();
        const {  email, password } = this.state;
        const { users, checkUser} = this.props;
        const user = { email , password };
        checkUser(user);
        this.setState({
            email: '',
            password: ''
        });
        users.map(user=>{
            if(user.auth===true){
                return this.props.updateData(true, user.email);
            }else{
                return null
            }
        }) 
    }
    
    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    render() {
        const { auth } = this.props;
        const { email, password } = this.state;
        return (
            <div className="login">
                {auth ? (
                    <div>
                        <h3> You successfully loged in</h3>
                        <div>
                            <Link to="/" className="link-item">
                                Go to the main page
                            </Link>
                         </div> 
                    </div>
                ): 
                <div>
                <h2>Log in</h2>
                <form onSubmit={this.onSubmit} >
                    {/* <div className="inputs"> */}
                    <Textinput 
                        name="email"
                        placeholder = 'Enter Email'
                        type = 'email'
                        title = 'Email:'
                        value = {email}
                        onChange = {this.onChange}/>
                    <Textinput 
                        name = "password"
                        placeholder = 'Enter Password'
                        type = 'password'
                        title = 'Password:'
                        value = { password }
                        onChange = {this.onChange}/>
                    {/* </div> */}
                    <input type="submit" value='Log In' className="btn-log"/>
                </form>
                <span className="links">
                <Link to="/signup" className="link-item">
                    Don't have an account?
                </Link>
                <Link to="/" className="link-item">
                    Forgot password?
                </Link>
                </span>
                </div>
                }
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    users: state.user.users
  });

export default  connect( mapStateToProps,{ getUsers, checkUser})(LogIn);;

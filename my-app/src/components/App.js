import React, {Component} from 'react';
import '../App.css';
import Header from './Header/Header';
import About from './About/About';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import {Route} from 'react-router-dom';
import ServicesRoute from './Services/ServiceRoutes';
import ServiceData from '../ServiceData';
import ServiceAdd from './Services/ServiceAdd';
import List from './List/List';
import LoginForm from './Login/LoginForm';
import Registration from './Registration/Registration';
import ProfilePage from './Profile/ProfilePage';
import {dispLogIn, dispLogOff, dispOnReg} from '../actions/actions';
import {connect} from 'react-redux';

class App extends Component {
    onLabelEmailChange = (e) => {
        this.setState({
            emailLabel: e.target.value
        })
    };
    onLogin = () => {
        localStorage.setItem('userEmail', this.state.emailLabel);
        this.props.dispLogIn();
    };

    onLogOff = () => {
        this.props.dispLogOff();
    };
    onReg = () =>{
        this.props.dispOnReg();
    }
    render() {
        const {isLoggedIn} = this.props;
        return (
            <div className='App'>
                <Header/>
                    <Route exact path='/' component={About}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/add' component={ServiceAdd}/>
                    <Route path='/list' component={List}/>
                    <Route path='/login' render={() => <LoginForm isLoggedIn={isLoggedIn} onLogin={this.onLogin} onLabelEmailChange={this.onLabelEmailChange}/>}/>
                    <Route path='/profile' render={() => <ProfilePage isLoggedIn={isLoggedIn} onLogOff={this.onLogOff}/>}/>
                    <Route path='/registration' render={() => <Registration isLoggedIn={isLoggedIn} onReg={this.onReg}/>}/>
                    <ServicesRoute services={ServiceData}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = ({isLoggedIn}) => {
    return {
        isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispLogIn: dispLogIn(dispatch),
        dispLogOff: dispLogOff(dispatch),
        dispOnReg: dispOnReg(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
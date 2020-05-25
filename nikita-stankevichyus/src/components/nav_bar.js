import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Component representing element of the navbar
function NavLink(props) {
  return (
    <li className = {'nav_link' + (props.shown ? '' : ' transparent')}>
      <Link to= {props.to}>
        <a 
          onClick = {props.onClick}
          href = {props.href}
        >
          <i className={props.icon + ' mg-l--15'}/>
          <span className='mg-l-5'>{props.text}</span>
        </a>
      </Link>
    </li>
  )
}

const initialState = {
  barShown: true,
}

export class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.navigation.barShown) {
      this.props.hideBar();
    } else {
      this.props.showBar();
    }
    // this.setState({
    //   barShown: !this.state.barShown,
    // })
  }

  
  render() {
  return (
    <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
          <li className = {'nav_link toggler' + (this.props.navigation.barShown ? '' : ' semi-transparent')}>
            <a 
              onClick = {this.handleClick}
              href = '#'
            >
              <i className={(this.props.navigation.barShown ? 'fas fa-times' : 'fas fa-bars') + ' mg-l--15'}/>
            </a>
          </li>
            
            <NavLink 
              onClick = {this.props.toHome} 
              href = '#home' 
              icon = 'fas fa-home' 
              shown = {this.state.barShown} 
              text='Home'
              to = '/home#home'
            />

              
            <NavLink 
              onClick = {this.props.toHome} 
              href = '#contacts' 
              icon = 'fas fa-phone-alt' 
              shown = {this.state.barShown} 
              text='Contacts'
              to='/home#contacts'
            />

            <NavLink 
              onClick = {this.props.toHome} 
              href = '#examples' 
              icon = 'fas fa-portrait' 
              shown = {this.state.barShown} 
              text='Work Examples'
              to='/home#examples'
            />

            <NavLink 
              onClick = {this.props.toServices} 
              href = '#home' 
              icon = 'fas fa-cut'
              shown = {this.state.barShown} 
              text='Services'
              to='/services#home'
            />

            {
              // If user logged instead of 'log in' and 'sign up' buttons only 'profile' button will be shown
              this.props.user.loged ?
              <NavLink 
                onClick = {this.props.toProfile} 
                href='#home' 
                icon = 'fas fa-user text' 
                shown = {this.state.barShown} 
                text = 'Profile'
                to='/profile#home'
              />
              : 
              <>
                <NavLink 
                  onClick = {this.props.toLogIn} 
                  href='#' 
                  icon = 'fas fa-sign-in-alt text' 
                  shown = {this.state.barShown} 
                  text = 'Log In'
                />
                <NavLink 
                  onClick = {this.props.toSignUp} 
                  href='#' 
                  icon = 'fas fa-user-plus text' 
                  shown = {this.state.barShown} 
                  text = 'Sign Up'/>
              </>
            }
          </ul>
    </nav>
  )
          }
}
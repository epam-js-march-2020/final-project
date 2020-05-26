import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Component representing element of the navbar
function NavLink(props) {
  return (
    props.to !== '#' ?
      <li className = {'nav_link'}>
        <Link to= {props.to} onClick = {props.onClick}>
            <i className={props.icon + ' mg-l--15'}/>
            <span className='mg-l-5'>{props.text}</span>
        </Link>
      </li>
    : 
    <li className = {'nav_link'}>
        <a href={props.to} onClick = {props.onClick}>
            <i className={props.icon + ' mg-l--15'}/>
            <span className='mg-l-5'>{props.text}</span>
        </a>
    </li>

  )
}

export function NavBar(props){
  

  const handleClick = () => {
    if (props.navigation.barShown) {
      props.hideBar();
    } else {
      props.showBar();
    }
  }

  

  return (
    <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
          <li className = {'nav_link toggler' + (props.navigation.barShown ? '' : ' semi-transparent')}>
            <a 
              onClick = {handleClick}
              href = '#'
            >
              <i className={(props.navigation.barShown ? 'fas fa-times' : 'fas fa-bars') + ' mg-l--15'}/>
            </a>
          </li>
            
            <NavLink 
              onClick = {props.toHome} 
              href = '#home' 
              icon = 'fas fa-home' 
              // shown = {state.barShown} 
              text='Home'
              to = '/home#home'
            />

              
            <NavLink 
              onClick = {props.toHome} 
              href = '#contacts' 
              icon = 'fas fa-phone-alt' 
              // shown = {state.barShown} 
              text='Contacts'
              to='/home#contacts'
            />

            <NavLink 
              onClick = {props.toHome} 
              href = '#examples' 
              icon = 'fas fa-portrait' 
              // shown = {state.barShown} 
              text='Work Examples'
              to='/home#examples'
            />

            <NavLink 
              onClick = {props.toServices} 
              href = '#home' 
              icon = 'fas fa-cut'
              // shown = {state.barShown} 
              text='Services'
              to='/services#home'
            />

            {
              // If user logged instead of 'log in' and 'sign up' buttons only 'profile' button will be shown
              props.user.loged ?
              <NavLink 
                onClick = {props.toProfile} 
                href='#home' 
                icon = 'fas fa-user text' 
                // shown = {state.barShown} 
                text = 'Profile'
                to='/profile#home'
              />
              : 
              <>
                <NavLink 
                  onClick = {props.toLogIn} 
                  href='#' 
                  icon = 'fas fa-sign-in-alt text' 
                  // shown = {state.barShown} 
                  text = 'Log In'
                  to='#'
                />
                <NavLink 
                  onClick = {props.toSignUp} 
                  href='#' 
                  icon = 'fas fa-user-plus text' 
                  // shown = {state.barShown} 
                  to='#'
                  text = 'Sign Up'/>
                  
              </>
            }
          </ul>
    </nav>
  )
          
}
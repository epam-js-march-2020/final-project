import React from 'react';

function NavLink(props) {
  return (
    <li className = {'nav_link' + (props.shown ? '' : ' transparent')}>
      <a 
        onClick = {props.onClick}
        href = {props.href}
        >
          <i className={props.icon + ' mg-l--15'}/>
          <span className='mg-l-5'>{props.text}</span>
      </a>
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
    this.setState({
      barShown: !this.state.barShown,
    })
  }

  
  render() {
  return (
    <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
          <li className = {'nav_link toggler' + (this.state.barShown ? '' : ' semi-transparent')}>
            <a 
              onClick = {this.handleClick}
            >
              <i className={(this.state.barShown ? 'fas fa-times' : 'fas fa-bars') + ' mg-l--15'}/>
            </a>
          </li>
            
            <NavLink 
              onClick = {this.props.toHome} 
              href = '#home' 
              icon = 'fas fa-home' 
              shown = {this.state.barShown} 
              text='Home'/>
              
            <NavLink 
              onClick = {this.props.toHome} 
              href = '#contacts' 
              icon = 'fas fa-phone-alt' 
              shown = {this.state.barShown} 
              text='Contacts'/>

            <NavLink 
              onClick = {this.props.toHome} 
              href = '#examples' 
              icon = 'fas fa-portrait' 
              shown = {this.state.barShown} 
              text='Work Examples'/>

            <NavLink 
              onClick = {this.props.toServices} 
              href = '#home' 
              icon = 'fas fa-cut'
              shown = {this.state.barShown} 
              text='Services'/>

            {
              this.props.user.loged ?
              <NavLink 
                onClick = {this.props.toProfile} 
                href='#home' 
                icon = 'fas fa-user text' 
                shown = {this.state.barShown} 
                text = 'Profile'/>
              : 
              <>
                <NavLink 
                  onClick = {this.props.toLogIn} 
                  href='#' 
                  icon = 'fas fa-sign-in-alt text' 
                  shown = {this.state.barShown} 
                  text = 'Log In'/>
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
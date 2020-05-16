import React from 'react';

function Icon(props) {
  return (
    <i className={props.icon}></i>
  )
}

export class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  
  render() {
  return (
    <nav className='nav--horizontal container--flex justify-content--center mg-t-15'>
          <ul className = 'container--flex'>
            <li className="nav_link"><a onClick = {this.props.toHome} href="#home"><Icon icon='fas fa-home mg-l--15'/><span className='mg-l-5'>Home</span></a></li>
            <li className="nav_link"><a onClick = {this.props.toHome} href='#contacts'><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Contacts</span></a></li>
            <li className="nav_link"><a onClick = {this.props.toHome} href='#whyWe'><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Why We</span></a></li>
            <li className="nav_link"><a onClick = {this.props.toServices}><Icon icon='fas fa-cut mg-l--15'/><span className='mg-l-5'>Services</span></a></li>
            {
              this.props.loged ? 
              <li className="nav_link"><a onClick = {this.props.toProfile}><Icon icon='fas fa-user mg-l--15'/><span className='mg-l-5'>Profile</span></a></li>
              : 
              <>
                <li className="nav_link"><a onClick = {this.props.logIn}><Icon icon='fas fa-sign-in-alt mg-l--15'/><span className='mg-l-5'>Log In</span></a></li>
                <li className="nav_link"><a><Icon icon='fas fa-user-plus mg-l--15'/><span className='mg-l-5'>Sign Up</span></a></li>
              </>
            }
          </ul>
    </nav>
  )
          }
}
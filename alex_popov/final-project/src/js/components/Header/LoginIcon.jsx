import React from 'react';
import {connect} from 'react-redux';


class LoginIcon extends React.Component {
    render() {
        console.log(this.props)
        const className = this.props.user ? 'header_loginIcon-active' : "header_loginIcon-passive" ;
        return (
            <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        )
    }
}

const propsMap = ( {user} ) => ({
    user
})


export default connect(propsMap)(LoginIcon)
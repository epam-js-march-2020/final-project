import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0 from "auth0-js";

const {Provider, Consumer: AuthConsumer} = React.createContext({isAuthorized: false});

class AuthProvider extends Component {
state = { isAuthorized: false }

auth0 = new auth0.WebAuth({
	 domain: "dev-0uys-cqp.eu.auth0.com",
    clientID: "xhMTZT6CF8HDi9Gr3oDBQAVrlM0Potqk",
    redirectUri: "http://localhost:3000/",
    responseType: "token id_token",
    scope: "openid"
});

authorize = () => {
	this.auth0.authorize();
	
}
handleAuthentication = () => {
	this.auth0.parseHash((err, authResult) => {
		if(authResult && authResult.accessToken && authResult.idToken){
			this.setState({isAuthorized: true}, () => {
		this.props.history.push("/account");
	});
		} else if(err){
			console.log(err);
		}
	})
}

render() {
	const {isAuthorized} = this.state;

	return(
<Provider value={{isAuthorized, authorize: this.authorize, handleAuthentication: this.handleAuthentication}}>
{this.props.children}
</Provider>
		);
}

}
const AuthProviderWithRouter = withRouter(AuthProvider)
export { AuthProviderWithRouter as AuthProvider };

export function withAuth(WrappedComponent) {
return class AuthHOC extends Component {
	render() {
		const {...rest} = this.props;
		return(

<AuthConsumer>
{contextProps => <WrappedComponent {...contextProps} {...rest} />}
</AuthConsumer>
		);
	}
};
}

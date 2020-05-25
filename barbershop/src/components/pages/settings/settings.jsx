import React, { Component } from 'react';
import './settings.css';
import {Link} from 'react-router-dom';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: this.props.name,
            password: '',
            status: '',
            editSwitcher: true,
            imgSrc: '', 
            showImage: false,
            imageStatus: ''           
         }
    }
    
    nameChangeHandler  = () => {
         if (this.state.name.length < 3) {
             this.setState({status: "Enter valid name"});
             return;
         }
         this.props.changeSettings(this.state.name, 'name');
         this.setState({status: "Name changed"})
     }

     passwordChangeHandler  = () => {
if (this.state.password.length === 0) {
    this.setState({status: "Enter password"});
    return;
}

        this.props.changeSettings(this.state.password, 'password');
        this.setState({status: "Password changed", password: ''});
    }

    imageChangeHandler  = (event) => {
        event.preventDefault();
        if (this.state.imgSrc === '')  {
            this.setState({imageStatus: "Give a link to your image"});
            return;
            
        }; 
        this.props.changeSettings(this.state.imgSrc, 'image');
        this.setState({imageStatus: "Image updated"});
      
    }
    
     render() { 
        return ( 
        <div className="settings-container">
            <h3 className="caliostro">Settings</h3>
            
            <div className="avatar">
        {this.props.image.length > 0 ?  <div><img className="image" src={this.props.image} alt="avatar"/></div> : null}
        <p>{this.state.imageStatus}</p>
            <form>
            <input onChange={(event) => {this.setState({imgSrc: event.target.value})}} type="text" placeholder="link to image"  />
            <button className="photo" onClick={this.imageChangeHandler}>Update image</button>
            </form>
            </div>
            <div className="settings">
            <button className={this.state.editSwitcher ? 'active': null} onClick={() => {this.setState({editSwitcher: true, status: '', imageStatus: ''})}}>Edit name</button>
            <button className={!this.state.editSwitcher ? 'active' : null} onClick={() => {this.setState({editSwitcher: false, status: '', imageStatus: ''})}}>Edit password</button><br/>
            </div>
            <div className="edit">
            
            {this.state.editSwitcher ? (
            <>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(event) => {this.setState({name: event.target.value})}}/><button onClick={this.nameChangeHandler}>Change</button>
            <br/></>) : 
            (<><label htmlFor="password">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}}/><button onClick={this.passwordChangeHandler}>Change</button>
            </>) 
        }
                    <h4>{this.state.status}</h4>
                    <Link to="/login"><button>Back to Cabinet</button></Link>
                    
                    </div>
          
        </div> );
    }
}
 
export default Settings;
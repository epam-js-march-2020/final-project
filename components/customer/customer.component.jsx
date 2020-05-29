import React from 'react';
import './customer.css'

class Customer extends React.Component {
  render() {
    return (
      <div className="customer">
        

        <div className="authorization"> 
          <div className="customerLogin">Customer login</div>
           <div className="form-group ">
             <label >Email: </label>
              <input type="email"  className= "form-control" id="email" placeholder="Enter email"  required/>
            </div>
          <div className="form-group" >
            <label >Password: </label>
             <input type="text" className="form-control" id="password" placeholder="" 
             required minlength="3" maxlength = "5" pattern ="[0-9]+"/>
         </div>
          <button type="button" className="btn btn-primary btnlogin" id = "enter">LOGIN</button>
        </div>

      
      <div className="newUser">
          <div>
            <h3 className="modal-title">Quick and easy </h3>
          </div>
        <form id = "myForm">
          <div className="modal-body">
            <div className="form-group col-7">
              <label for="name">Name: </label>
              <input type="text" className="form-control" id="name" placeholder="Name" required pattern="[A-Z][a-z]+"/>
            </div>
            <div className="form-group col-7">
              <label for="email">Surname: </label>
              <input type="text" className="form-control" id="surname" placeholder="Surname" 
              required pattern="[A-Z][a-z]+"/>
            </div>
            <div className="form-group col-7">
               <label for="count">Email: </label>
               <input type="email"  className="form-control" id="email" placeholder="Enter email"  required/>
            </div>
            <div className="form-group col-7">
                <label for="price">Password: </label>
                <input type="text" className="form-control" id="password" placeholder="Enter your new password (numbers)" 
                 required minlength="3" maxlength = "5" pattern ="[0-9]+"/>
              </div>
          
            <input type="submit" value="Register " className="btn btn-primary"  id="submit"/>                         
            
            </div> 
          </form>  
        </div>
      </div>
    )
  }
}

export default Customer;

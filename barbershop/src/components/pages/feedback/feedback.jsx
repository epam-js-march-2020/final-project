import React, { Component } from 'react';
import './feedback.css';
import StarRating from 'star-rating-react';
import {Link} from 'react-router-dom';



class Feedback extends Component {
    state = { 
        rating: 0,
        status: '',
        comment: ''
     }


    handleRating = (rating) => {
        this.setState({rating});
      }

      submitHandler = (event) => {
event.preventDefault();
          this.props.feedback(this.state.comment, this.state.rating, Date.now());
          this.setState({status: 'Your feedback submitted!'})
      }


    render() { 
        return ( this.props.logged ? <div className="feedback">
            <h1 className="caliostro">Leave your Feedback</h1>
            <div className="feedback">
                <img className="image" src={this.props.image} alt="avatar" />
                <p>{this.props.name}</p>
                <StarRating
  size={5}
  value={this.state.rating}
  onChange={(val) => {this.setState({rating: val})}}
/>
            <form>
            <label htmlFor="comment">Your comment:</label><br/>
            <textarea onChange={(event) => {this.setState({comment: event.target.value})}}></textarea><br/>
                    
    <p>{this.state.status}</p>
            <button onClick={this.submitHandler}>Submit</button>
            
            </form>    
                
            </div>
        </div> : <Link className="login" to="/login"><button className="login">Log in please</button></Link>);
    }
}
 
export default Feedback;
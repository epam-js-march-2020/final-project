import React from 'react';
import './feedbackList.css';
import moment from 'moment';
import StarRating from 'star-rating-react';


const FeedbackList = (props) => {
    let userData = props.users.filter((item) => item.feedback);

    userData = userData.sort((a, b) => a.feedback.date < b.feedback.date ? 1 : -1 );
    userData  = userData.filter((item, index) => index <=3 );

   
    let result = userData.map(({name, image, feedback}) => 
    <div className="feedback-render" key={feedback.date}>
    <img src={image} className="feedback-image" alt="avatar" />
    <p><b>{name}</b> wrote {moment(feedback.date).format('MMMM Do YYYY h:mm:ss a')}:</p>
    <p className="comment">{feedback.comment}</p>
    <StarRating size={5} value={feedback.rating} />
    </div>
    )

    return ( 
    <div>
        <h3 className="caliostro">Last feedback of our clients:</h3>
        {result}
    </div> );
}
 
export default FeedbackList;
import './Reviewcard.css';
import React,{useState} from "react";
import Likes from './Likes';


function Reviewcard({title,review,score}){
    return(
        <div className='reviewcard'>
            <div className='reviewcardinfo'>
                <h1 className='reviewtitle'>{title}</h1>
                <h2 className='review'>{review}</h2>
            </div>
            <div className="review-score">
                    <p>{score}</p>
            </div>
        </div>
    );
}

export default Reviewcard;
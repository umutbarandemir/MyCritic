import './TheCard.css';
import React,{useState} from "react";


const TheCard = ({image,title,summary,score, onClick}) => {

    
    return(
        <div className='card' style={{
            backgroundImage:"url(compcinema.jpg)"
        }}>
            <img src={image} alt={title} className="card-image"/>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-summary">{summary}</p>
            </div>
            <div className='cardscoreandbutton'>
            <div className="card-score">
                    <p>{score}</p>
            </div>
            <button className='cardbutton' onClick={onClick}>Go To Page</button>
            </div>
        </div>
    );
}

export default TheCard;



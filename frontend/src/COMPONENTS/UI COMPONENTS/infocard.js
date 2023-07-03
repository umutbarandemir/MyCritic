import './infocard.css';
import React,{useState} from "react";

const InfoCard = ({date,publisher,genre,cast,platform}) => {
    return(
        <div className='infocard' style={{
            backgroundImage:"url(cinema.jpg)"
        }}>
            <div className="infocard-content">
                <h2>RELEASE DATE :  {date}</h2>
                <h2>PUBLISHER :  {publisher}</h2>
                <h2>GENRE :  {genre}</h2>
                <h2>CAST :  {cast}</h2>
                <h2>PLATFORM : {platform}</h2>
            </div>
        </div>
    );
}

export default InfoCard;



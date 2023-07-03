import './GameProfile.css';
import React,{useState,useEffect} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import InfoCard from '../UI COMPONENTS/infocard';
import Reviewcard from '../UI COMPONENTS/Reviewcard';
import TrailerPlayer from '../UI COMPONENTS/TrailerPlayer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

//  ``

function GameProfile(){

    const [reviewList, setReviewList] = useState([]);
    const trailerUrl = 'https://www.youtube.com/watch?v=J_gEzOZKyE4&ab_channel=GhostStory';

    const navigate = useNavigate();

    const navigateReviewPage = () => {
        if (localStorage.getItem("_id")) {
        navigate("/Review");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
        navigate("/LoginRegister");
        }
    }; 

    useEffect(() => {
        const checkUser = () => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        } else {
            fetch("http://localhost:4000/api/all/reviews")
            .then((res) => res.json())
            .then((data) => setReviewList(data.reviews))
            .catch((err) => console.error(err));
        }
        };
        checkUser();
    }, [navigate]);

    
    return(
        <div className='gamepage'>
            <h1>BIOSHOCK INFINITE</h1>
            <TheCard 
            image="bioshock.jpg"
            title="Bioshock Infinite"
            summary="A man is sent to the flying city of Columbia to find a missing girl. However, upon arrival he discovers that the city, its people, and his objective are all not what they seem."
            score="8.4"
            />
            <InfoCard
            date="28/10/2015" 
            publisher="2K Games" 
            genre="Action RPG" 
            cast="Troy Baker / Courtnee Draper/ Kiff VandenHeuvel"
            platform="PC, PS3, PS4, XBox 360, XBox One"
            />
            <div className='trailercomp'>
                <h1>
                    TRAILER 
                </h1>
                <TrailerPlayer trailerUrl={trailerUrl} />
            </div>
            <div className='preReview'>
                <h1>REVIEWS</h1>
                <button className='reviewButton' onClick={navigateReviewPage}>Review</button>
            </div>
            <div className="review__container ">
                    {reviewList.map((review) => (
                    <Reviewcard title={review.title} review={review.description} score={review.score}/>
                    ))}

                </div>
        </div>
    );
}

export default GameProfile;
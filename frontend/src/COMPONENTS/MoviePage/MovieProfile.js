import './MovieProfile.css';
import React,{useState,useEffect} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import InfoCard from '../UI COMPONENTS/infocard';
import Reviewcard from '../UI COMPONENTS/Reviewcard';
import TrailerPlayer from '../UI COMPONENTS/TrailerPlayer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MovieProfile(){

    const [reviewList, setReviewList] = useState([]);
    const trailerUrl = 'https://www.youtube.com/watch?v=1NJO0jxBtMo&ab_channel=RottenTomatoesClassicTrailers';

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
            <h1>BRAVEHEARTH</h1>
            <TheCard 
            image="braveheart.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love story"
            score="8.9"
            />
            <InfoCard
            date="28/10/2015" 
            publisher="Mel Gibson/ Randall Wallace" 
            genre="Action RPG" 
            cast="William Wallace"
            platform="BluTV"
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

export default MovieProfile;
import './TVProfile.css';
import React,{useState,useEffect} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import InfoCard from '../UI COMPONENTS/infocard';
import Reviewcard from '../UI COMPONENTS/Reviewcard';
import TrailerPlayer from '../UI COMPONENTS/TrailerPlayer';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function TVProfile(){

    const [reviewList, setReviewList] = useState([]);
    const trailerUrl = 'https://www.youtube.com/watch?v=9GgxinPwAGc&ab_channel=RewatchAgain';

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
            <h1>VIKINGS</h1>
            <TheCard 
            image="Vikings.jpg"
            title="Vikings"
            summary="Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean. The series broadly follows the exploits of the legendary Viking chieftain Ragnar Lothbrok and his crew, and later those of his sons."
            score="9.6"
            />
            <InfoCard
            date="28/10/2015" 
            publisher="Michael Hirst" 
            genre="Action/Dram" 
            cast="Ragnar Lothbrok"
            platform="Netflix"
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

export default TVProfile;
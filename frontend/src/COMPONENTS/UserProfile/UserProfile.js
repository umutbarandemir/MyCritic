import { json } from 'react-router-dom';
import Reviewcard from '../UI COMPONENTS/Reviewcard';
import './UserProfile.css';
import React,{useState,useEffect} from "react";

//{JSON.parse(auth).username}

function UserProfile(){

    const auth = localStorage.getItem("_id");

    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const checkUser = () => { 
          {
            fetch("http://localhost:4000/api/all/reviews")
              .then((res) => res.json())
              .then((data) => setReviewList(data.reviews))
              .catch((err) => console.error(err));
          }
        };
        checkUser();
      }, []);

    return(
        <div className='profilewrapper'>
            <div className='userprofileinfo'>
                <h1>umutbaran1</h1>
                <h2>Number Of Reviews:{reviewList.length}</h2>
            </div>
                    {reviewList.map((review) => (
                    <Reviewcard title={review.title} review={review.description} score={review.score}/>
                    ))}
        </div>
    );
}

export default UserProfile;
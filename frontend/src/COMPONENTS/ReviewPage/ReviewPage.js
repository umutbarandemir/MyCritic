import './ReviewPage.css';
import Reviewcard from '../UI COMPONENTS/Reviewcard';
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Likes from '../UI COMPONENTS/Likes';

function ReviewPage(){

    const [reviewList, setReviewList] = useState([]);
    const [title, setTitle] = useState('');
    const [review, setReviewDesc] = useState('');
    const [score, setScore] = useState('');
    const navigate = useNavigate();

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

      const createReview = () => {
        fetch("http://localhost:4000/api/create/review", {
          method: "POST",
          body: JSON.stringify({
            title,
            review,
            score,
            id: localStorage.getItem("_id"),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.message);
            setReviewList(data.reviews);
          })
          .catch((err) => console.error(err));
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      createReview();
      setTitle("");
      setReviewDesc("");
      setScore("");
    };

    
    return(
        <div>
        <main className='reviewcontainer'>
            <h1 className='reviewTitle'>Give Us Your Opinion</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Review Title</label>
                <input className='reviewtitleinput'
                    type='text'
                    maxLength={30}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor='password'>Review</label>
                <input className='reviewdescinput'
                    type='text'
                    maxLength={400}
                    minLength={100}
                    value={review}
                    onChange={(e) => setReviewDesc(e.target.value)}
                    required
                />
                <label htmlFor='score'>Score</label>
                <input className='reviewscoreinput'
                    type='number'
                    value={score}
                    max={10}
                    min={0}
                    onChange={(e) => setScore(e.target.value)}
                    required
                />
                <button className='loginBtn'>Submit Review</button>
            </form>
        </main>
                <div className="review__container ">
                    {reviewList.map((review) => (
                    <Reviewcard title={review.title} review={review.description} score={review.score}/>
                    ))}

                </div>
    </div>
    );
}

export default ReviewPage;
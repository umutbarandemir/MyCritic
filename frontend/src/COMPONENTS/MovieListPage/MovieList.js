import './MovieList.css';
import React,{useState,useEffect} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../UI COMPONENTS/SearchBar';
import MovieBox from '../UI COMPONENTS/MovieCard';
import { GoSearch } from "react-icons/go";


function MovieList(){

    const navigate = useNavigate();

    const navigateToPage = () => {

        navigate("/MoviePage");
        }
    
    return(

        <div className='movielist'>
            <h1>Top Movies Of All Time</h1>
            <TheCard 
            image="braveheart.jpg"
            title="BraveHeart"
            summary="A man is sent to the flying city of Columbia to find a missing girl. However, upon arrival he discovers that the city, its people, and his objective are all not what they seem."
            score="9.2"
            onClick={navigateToPage}
            />
            <TheCard 
            image="chinatown.jpg"
            title="China Town"
            summary="A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder."
            score="9.4"
            onClick={navigateToPage}
            />
            <TheCard 
            image="goodwill.jpg"
            title="Good Will Hunting"
            summary="Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life."
            score="9.0"
            onClick={navigateToPage}
            />
            <TheCard 
            image="onceupon.jpeg"
            title="Once Upon a Time In America"
            summary="Scotish warriors freedom and love Scotish warriors freedom and love storyScotish warriors freedom and love storyScotish warScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warstory"
            score="8.9"
            onClick={navigateToPage}
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />      
        </div>
    );
}

export default MovieList;
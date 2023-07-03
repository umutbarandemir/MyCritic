import './GameList.css';
import React,{useState} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import { useNavigate } from 'react-router-dom';

function GameList(){


    const navigate = useNavigate();

    const navigateToPage = () => {

        navigate("/GamePage");
        }

    return(
        <div className='gamelist'>
            <h1>Top Games Of All Time</h1>
            <TheCard 
            image="bioshock.jpg"
            title="Bioshock Infinite"
            summary="A man is sent to the flying city of Columbia to find a missing girl. However, upon arrival he discovers that the city, its people, and his objective are all not what they seem."
            score="8.4"
            onClick={navigateToPage}
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warriors freedom and love story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and Scotish warriors freedom and love storyScotish warriors freedom and love storyScotish warlove story"
            score="9.2"
            />
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love Scotish warriors freedom and love storyScotish warriors freedom and love storyScotish warScotish warriors freedom and love storyScotish warriors freedom and love storyScotish warstory"
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
            <TheCard 
            image="cinema.jpg"
            title="BraveHearth"
            summary="Scotish warriors freedom and love story"
            score="9.2"
            />

        </div>
    );
}

export default GameList;
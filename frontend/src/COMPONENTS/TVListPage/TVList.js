import './TVList.css';
import React,{useState} from "react";
import TheCard from '../UI COMPONENTS/TheCard';
import { useNavigate } from 'react-router-dom';

function TVList(){


    const navigate = useNavigate();

    const navigateToPage = () => {

        navigate("/TVProfile");
        }

    return(
        <div className='tvlist'>
        <h1>Top TV Series Of All Time</h1>
        <TheCard 
        image="Vikings.jpg"
        title="Vikings"
        summary="Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.

        "
        score="9.2"
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

export default TVList;
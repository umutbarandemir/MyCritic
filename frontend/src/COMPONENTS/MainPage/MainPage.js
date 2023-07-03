import SearchBar from '../UI COMPONENTS/SearchBar';
import './MainPage.css';
import Slider from '../UI COMPONENTS/Slider';

import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

function MainPage(){

    const movieslides = [
        { url: "braveheart.jpg", title: "brave" },
        { url: "chinatown.jpg", title: "town" },
        { url: "onceupon.jpeg", title: "america" },
        { url: "goodwill.jpg", title: "genious" },
      ];
    
      const gameslides = [
        { url: "bioshock.jpg", title: "booker" },
        { url: "hades.avif", title: "hades" },
        { url: "rainbow.jpg", title: "r6" },
        { url: "red.jpg", title: "horse" },
      ];

      const tvlides = [
        { url: "modern.jpg", title: "family" },
        { url: "got.webp", title: "got" },
        { url: "sunny.jpeg", title: "funny" },
        { url: "Vikings.jpg", title: "ragnar" },
      ];
  
      
      const containerStyles = {
        width: "80%",
        height: "800px",
        margin: "0 auto",
        padding: "0 0 150px 0",
      };

      const navigate = useNavigate();

        const handleSearch = (searchTerm) => {
          console.log('Searching for:', searchTerm);

        };

        return(
            <div className='mainpagecss'>  
            <SearchBar/> 
                        <div style={containerStyles}>
                            <h1>Recommended Movies </h1>
                            <Slider slides={movieslides} goto="/MoviePage" />
                        </div>
    
                    <div style={containerStyles}>
                        <h1>Recommended Games </h1>
                        <Slider slides={gameslides} goto="/GamePage" />
                    </div>
    
                    <div style={containerStyles}>
                        <h1>Recommended Tv Shows </h1>
                        <Slider slides={tvlides} goto="/TVProfile" />
                    </div>
                  
            </div>
        );
      };

export default MainPage;
import NavigationBar from "./COMPONENTS/UI COMPONENTS/NavigationBar";
import GameList from "./COMPONENTS/GameListPage/GameList";
import MovieList from "./COMPONENTS/MovieListPage/MovieList";
import TVList from "./COMPONENTS/TVListPage/TVList";
import UserProfile from "./COMPONENTS/UserProfile/UserProfile";
import LoginRegister from "./COMPONENTS/Login&Register/LoginRegister";
import MainPage from "./COMPONENTS/MainPage/MainPage";
import GamePage from "./COMPONENTS/GamePage/GameProfile";
import MoviePage from "./COMPONENTS/MoviePage/MovieProfile";
import TVPage from "./COMPONENTS/TVSeriesPage/TVProfile";
import ReviewPage from "./COMPONENTS/ReviewPage/ReviewPage";
import Register from "./COMPONENTS/Login&Register/register";
import Footer from "./COMPONENTS/Footer/footer";
import {Route,Routes} from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";
import TheCard from "./COMPONENTS/UI COMPONENTS/TheCard";

function App() {

  return (
    <div className="App">
      <NavigationBar/> 
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/GameListPage" element={<GameList/>}/>
          <Route path="/MovieListPage" element={<MovieList/>}/>
          <Route path="/TVListPage" element={<TVList/>}/>
          <Route path="/UserProfile" element={<UserProfile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/GamePage" element={<GamePage/>}/>
          <Route path="/MoviePage" element={<MoviePage/>}/>
          <Route path="/TVProfile" element={<TVPage/>}/>
          <Route path="/Review" element={<ReviewPage/>}/>
          <Route path="/LoginRegister" element={<LoginRegister/>}/>
        </Routes>
      </div> 
      <Footer></Footer>
    </div>
  );
}

export default App;

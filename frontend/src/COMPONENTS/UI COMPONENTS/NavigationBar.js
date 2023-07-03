import './NavigationBar.css';
import React,{useState} from "react";
import { SlUser,SlLogin,SlLogout } from "react-icons/sl";
import { Link, useMatch,useResolvedPath,useNavigate} from 'react-router-dom';

function NavigationBar(){
    const auth = localStorage.getItem("_id");
    const navigate = useNavigate();

    const signOut = () => {

        localStorage.removeItem("_id");
        navigate("/");

    };

    /* if(!localStorage.getItem("_id")){
    
    } */
    
    return(

        /* 
         <nav className='navbar'>
            <Link to='/' className='sitetitle'>MyCritic</Link>
            <ul>
                <CustomLink to='/MovieListPage'>
                    Movies
                </CustomLink>
                <CustomLink to='/GameListPage'>
                    Games
                </CustomLink>
                <CustomLink to='/LoginRegister' >
                    Sign In
                </CustomLink>
                <CustomLink onClick={signOut} to='/' >
                    Sign Out
                </CustomLink>
                <CustomLink to='/UserProfile'>
                    <SlUser size="2rem"/>
                </CustomLink>
            </ul>
       </nav> 
        */
       <nav className='navbar'>

            <Link to='/' className='sitetitle'>MyCritic</Link>

            {
                auth ? 
 
            <ul>
                <CustomLink to='/MovieListPage'>
                    Movies
                </CustomLink>
                <CustomLink to='/TVListPage'>
                    TV Shows
                </CustomLink>
                <CustomLink to='/GameListPage'>
                    Games
                </CustomLink>
                <CustomLink onClick={signOut} to='/' >
                    Sign Out
                </CustomLink>
                <CustomLink to='/UserProfile'>
                    <SlUser size="2rem"/>
                </CustomLink>
            </ul>

                :

               
            <ul>
                <CustomLink to='/MovieListPage'>
                    Movies
                </CustomLink>
                <CustomLink to='/TVListPage'>
                    TV Shows
                </CustomLink>
                <CustomLink to='/GameListPage'>
                    Games
                </CustomLink>
                <CustomLink to='/LoginRegister' >
                    Sign In
                </CustomLink>
                
            </ul>

            }
       </nav>    
    );    
}

function CustomLink ({to, children,...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true });
    return(
        <li className={isActive ? "active" : ""}>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default NavigationBar;

import './footer.css';
import React,{useState} from "react";
import { Link, useMatch,useResolvedPath} from 'react-router-dom';

function Footer(){

    return(
        <div className='footer-container'>
            <ul>
                <CustomLink to='/MovieListPage' onClick={scrollToTop}>
                    Movies
                </CustomLink>
                <CustomLink to='/TVListPage' onClick={scrollToTop}>
                    TV Shows
                </CustomLink>
                <CustomLink to='/GameListPage' onClick={scrollToTop}>
                    Games
                </CustomLink>   
            </ul>
            <Link to='/' className='sitetitle' onClick={scrollToTop}>MyCritic</Link>
            <h4>Created By  </h4>
            <h4>Umut Baran Demir - umutbaran@outlook.com</h4>
        </div>
    );
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
export default Footer;
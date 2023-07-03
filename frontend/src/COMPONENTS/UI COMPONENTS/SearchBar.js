import './SearchBar.css';
import React,{useState} from "react";
import { GoSearch } from "react-icons/go";

//value={value} onChange={onChange} bu input taginin içine olacak

function SearchBar({onSearch}){

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
      };

    return(
        <div className='searchbar' style={{
            backgroundImage:"url(cinema.jpg)"
        }}>
            <h1>Anything on Your Mind?</h1>
            <form onSubmit={handleFormSubmit} className='searchbar-component'>
                <input type='text' placeholder='Search...' name='searchedvalue' value={searchTerm} onChange={handleInputChange}></input>
                <button type='submit'><GoSearch size="1.5rem"/></button>
            </form>
        </div>
    );
}

export default SearchBar;

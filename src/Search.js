import {useState} from 'react';
const Search = (props) =>{
    const[searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) =>{
        // console.log(e.target.value);
        setSearchTerm(e.target.value);
        // B. used elsewhere(that is onSearch)
        props.onSearch(e);
    }

    return(
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange ={handleChange}/>
            <p>
                Searching for <strong>{searchTerm}</strong>
            </p>
        </div>
    );

}

export default Search;
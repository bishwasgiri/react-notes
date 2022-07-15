import React from "react";

const Search = ({search,onSearch}) =>{
    // const {search,onSearch} = props;
    return(
        <React.Fragment>
            <label htmlFor="search">Search</label>
            <input type="text" 
                id="search" 
                onChange ={onSearch} 
                value={search}
            />
        </React.Fragment>

    );

}

export default Search;
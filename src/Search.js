import React from "react";

const Search = ({search,onSearch}) =>{
    // const {search,onSearch} = props;

    return(
        // normally JSX returned by a React Component needs only one wrapping top-level element
        // to render multiple top-level elements side by side in JSX , we have to wrap them into array and give every sibling key attribute
        // the solution is using react fragment
        // <></> can also be used
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
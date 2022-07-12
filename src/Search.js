
const Search = (props) =>{
    return(
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange ={props.onSearch}/>
            {/* <p>
                Searching for <strong>{searchTerm}</strong>
            </p> */}
        </div>
    );

}

export default Search;
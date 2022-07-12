
const Search = ({search,onSearch}) =>{
    // const {search,onSearch} = props;
    return(
        <div>
            <label htmlFor="search">Search</label>
            {/* Controlled Components */}
            <input type="text" 
                id="search" 
                onChange ={onSearch} 
                value={search}
            />

        </div>
    );

}

export default Search;
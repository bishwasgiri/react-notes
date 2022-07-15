// import List from "./List";
// import Search from "./Search";
import InputWithLabel from './InputWithLabel';
import {useEffect, useState} from 'react';

const App = () => {
  const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    }
  ];

  // react custom hooks
  // using custom hook more than once in react leads to overwrite the value. to fix this pass in a key
  const useSemiPersistentState = (key,initialState) =>{
    const[value,setValue] = useState(localStorage.getItem(key)|| initialState);
    
    useEffect(()=>{
      localStorage.setItem(key,value);
      // console.log('this is useeffect');
    },[value,key]);
    return [value,setValue];
  };

  const[searchTerm,setSearchTerm] = useSemiPersistentState('search','react');
  

  const handleSearch = event=>{
    setSearchTerm(event.target.value);
    // localStorage.setItem('search',event.target.value);
  };

  // const searchedStories = stories.filter(function(story){
  //   return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      {/* <Search search = {searchTerm} onSearch = {handleSearch}/>
      <List list={searchedStories}/> */}
      <InputWithLabel
        id="search"
        label="Search"
        value = {searchTerm}
        onInputChange = {handleSearch}
      />

    </div>
  );
}

export default App;

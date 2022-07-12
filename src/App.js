import List from "./List";
import Search from "./Search";
// import {useState} from 'react';

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

  // A. Call back Function Get Introduced
  const handleSearch = event=>{
    // C. call back to place it was introduced
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search onSearch = {handleSearch}/>
      <List list={stories}/>
    </div>
  );
}

export default App;

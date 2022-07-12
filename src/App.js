import List from "./List";
import Search from "./Search";
import {useState} from 'react';

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

  // to lift the state meaning share the state of search component to other component
  const[searchTerm, setSearchTerm] = useState('');

  const handleSearch = event=>{
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function(story){
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search onSearch = {handleSearch}/>
      <List list={searchedStories}/>
    </div>
  );
}

export default App;

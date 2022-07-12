import List from "./List";
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

  // hooks are made to make app reactive
  // hooks are function that return array first is state and second is function
  // array destructuring
  const [searchTerm,setSearchTerm] = useState('');

  const handleChange = (e) =>{
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange ={handleChange}/>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
      <List list={stories}/>

    </div>
  );
}

export default App;

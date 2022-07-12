import List from "./List";

const App = () => {
  const list = [
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

  const handleChange = (e) =>{
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange ={handleChange}/>
      <List list={list}/>

    </div>
  );
}

export default App;

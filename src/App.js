import List from "./List";

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

function App() {

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
      {/* creating instance of list component */}
      <List/>
      {/* creating another instance of List component*/}
      <List/>
    </div>
  );
}

export default App;

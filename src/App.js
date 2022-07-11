import List from "./List";

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

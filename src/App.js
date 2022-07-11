
const title = 'React';
const welcome = {
  greeting: 'Hey',
  title:'React'
}

const greet = (titles)=>{
  return titles;
}

function App() {

  return (
    <div className="App">
      <h1>Hello {title}</h1>
      {/*everything in curly braces in JSX can be used for Javascript expressions */}
      <h1>{welcome.greeting}{welcome.title}</h1>
      <h1>{greet('Hello React')}</h1> 
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;

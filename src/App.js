
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
      {
        // list.map(function(item){
        //   return <div>{item.title}</div>
        // })

        // imporoved code
        // key is used so that react can identify modified items if list changes
        // avoid using index 
        // list.map(function(item){
        //   return(
        //     <div key={item.objectID}>
        //       {item.title}
        //      </div>
        //   ) ;
        // })
      }
      {
        // display more items
        list.map(function(item){
          return(
            <div key = {item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })

      }
    </div>
  );
}

export default App;

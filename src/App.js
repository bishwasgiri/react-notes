import List from "./List";
import Search from "./Search";
// import InputWithLabel from './InputWithLabel';
import {useEffect, useState,useReducer} from 'react';

// A
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const storiesReducer = (state,action) =>{
  switch(action.type){
    case 'STORIES_FETCH_INIT':
      return{
        ...state,
        isLoading:true,
        isError:false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return{
        ...state,
        isLoading:false,
        data:action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return{
        ...state,
        isLoading:false,
        isError:true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data:state.data.filter(
          story=> action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
}

const App = () => {
  // const initialStories = [
  //   {
  //   title: 'React',
  //   url: 'https://reactjs.org/',
  //   author: 'Jordan Walke',
  //   num_comments: 3,
  //   points: 4,
  //   objectID: 0,
  //   },
  //   {
  //   title: 'Redux',
  //   url: 'https://redux.js.org/',
  //   author: 'Dan Abramov, Andrew Clark',
  //   num_comments: 2,
  //   points: 5,
  //   objectID: 1,
  //   }
  // ];

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

  // const [stories,setStories] = useState([]);
  // const [stories, dispatchStories] = useReducer(storiesReducer,[]);
  
  // const [isLoading,setIsLoading] = useState(false);
  // const [isError,setIsError] = useState(false);

  // combining all the state management that belong to asychronous data
  const [stories,dispatchStories] = useReducer(storiesReducer,
    {data:[],isLoading:false,isError:false});
  
  // const getAsyncStories = ()=>
  //   new Promise(resolve=>
  //     setTimeout(()=> resolve({data:{stories:initialStories}}),2000)
  //     );
      
    // Promise.resolve({data:{story:initialStories}});
  

  useEffect(()=>{
    // setIsLoading(true);
    dispatchStories({type:'STORIES_FETCH_INIT'});

    fetch(`${API_ENDPOINT}react`) // B
      .then(response => response.json()) // C
      .then(result =>{
        // setStories(result.data.stories);
        dispatchStories({
          // type:'SET_STORIES',
          type:'STORIES_FETCH_SUCCESS',
          payload:result.hits, //D
        });
        // setIsLoading(false);
      })
      .catch(()=>
        // setIsError(true)
        dispatchStories({type:'STORIES_FETCH_FAILURE'})
      );
  },[]);

  const[searchTerm,setSearchTerm] = useSemiPersistentState('search','react');
  
  // const [stories,setStories] = useState(initialStories);
  
  const handleRemoveStory = item =>{
    // const newStories = stories.filter(
    //   story => item.objectID !== story.objectID
    // );
    dispatchStories({
      type:'REMOVE_STORY',
      payload:item
    });
    // setStories(newStories);
    // dispatchStories({
    //   type: 'SET_STORIES',
    //   payload: newStories,
    // });
  }

  const handleSearch = event=>{
    setSearchTerm(event.target.value);
    // localStorage.setItem('search',event.target.value);
  };

  const searchedStories = stories.data.filter(function(story){
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search search = {searchTerm} onSearch = {handleSearch}/>
      {/* Conditional rendering */}
      {stories.isError && <p>Something went wrong...</p>}
      {
        stories.isLoading ? (
          <p>Loading.....</p>
        ):(
          <List list={searchedStories} onRemoveItem={handleRemoveStory}/>
        )
      }
      


      {/* <InputWithLabel
        id="search"
        // label="Search"
        value = {searchTerm}
        // autoFocus // declarative way 
        isFocused  // imperative way(isFocused is equal to isFocused = true)
        onInputChange = {handleSearch}
      >
        Search
      </InputWithLabel> */}

    </div>
  );
}

export default App;

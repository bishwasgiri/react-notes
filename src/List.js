import Item from "./Item";
// props are javascript object basically
const List = ({list}) =>{
    return(
        <div>
            {
                list.map(item =>(
                    <Item key ={item.objectID} item ={item}/>
                ))
            }
        </div>
    );
}

export default List;
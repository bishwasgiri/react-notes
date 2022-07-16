import Item from "./Item";
// props are javascript object basically
const List = ({list,onRemoveItem}) =>{
    return(
        <div>
            {
                list.map(item =>(
                    <Item key ={item.objectID} item ={item} onRemoveItem = {onRemoveItem}/>
                ))
            }
        </div>
    );
}

export default List;
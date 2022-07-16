const Item = ({item,onRemoveItem})=>{
    const handleRemoveItem = ()=>{
        onRemoveItem(item);
    }
   return (
        <div>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            {/* <span>
                <button type="button" onClick={handleRemoveItem}>Dismiss</button>
            </span> */}
            {/* inline Handlers */}
            <span>
                {/* <button type="button"onClick={onRemoveItem.bind(null,item)}>Dismiss</button> */}
                {/* This should be avoided */}
                <button type="button" onClick={()=>onRemoveItem(item)}>Dismiss</button>      
            </span>
        </div>
    );
    
}

export default Item;
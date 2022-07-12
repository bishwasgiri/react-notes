
// props are javascript object basically
const List = (props) =>{
    return(
        <div>
            {/* in case return statement does not do anything but return a statment only then curly braces can be ommited */}
            {/* return staement is also removed */}
            {props.list.map(item =>(    
                <div key = {item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                </div>                                  
            ))}
        </div>
    );
}

export default List;
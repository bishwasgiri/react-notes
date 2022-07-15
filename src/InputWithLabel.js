const InputWithLabel = ({id,children,value,onInputChange}) => {
    return ( 
        <>
            <label htmlFor={id}>{children}</label>
            <input 
                type="text" 
                id= {id}
                value = {value}
                onChange = {onInputChange}
            />
        </>
     );
}
 
export default InputWithLabel;
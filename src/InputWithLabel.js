const InputWithLabel = ({id,label,value,onInputChange}) => {
    return ( 
        <>
            <label htmlFor={id}>{label}</label>
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
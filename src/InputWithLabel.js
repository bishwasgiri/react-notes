import { useEffect, useRef } from "react";
const InputWithLabel = ({id,children,value,isFocused,onInputChange}) => {
    
    // imperative way of programming(tells not what to do but how to do it)
    // A.
    const inputRef = useRef();

    // C.
    useEffect(()=>{
        if(isFocused && inputRef.current){
            // D
            inputRef.current.focus();
        }
    },[isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input 
                type="text"
                ref = {inputRef} // B. 
                id= {id}
                value = {value}
                onChange = {onInputChange}
                autoFocus = {isFocused}
            />
        </>
     );
}
 
export default InputWithLabel;
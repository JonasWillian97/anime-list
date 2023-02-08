import React, {useState} from 'react';
import useDebounce from './Usedebounce'


const SearchInput = ({value, onChange}) => {
    const [displayValue, setDisplayValue] =  useState(value);
    const debouncedChange = useDebounce(onChange, 500)

    function handleChange (e) {
        setDisplayValue(e.target.value)
        debouncedChange(e.target.value)
    }
   return ( 
   <div>
    <input className='input' placeholder='Faça busca por um anime...' type ='search' value={displayValue} onChange={handleChange} />
    </div>
   )
}

export default SearchInput;
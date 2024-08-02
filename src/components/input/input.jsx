import React from 'react'

const InputComp = ({type = 'text',onChange,placeholder,required = 'true'}) =>{
return(
<input 
type={type}
onChange={onChange} 
className='form-control' 
placeholder={placeholder}
required ={required}/>
)
}

export default InputComp
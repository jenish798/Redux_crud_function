import React from 'react'

const ButtonComp = ({onClick,type,name}) =>{
    return(
        <button onClick={onClick} type={type} name={name}>{name}</button>
    )
}

export default ButtonComp
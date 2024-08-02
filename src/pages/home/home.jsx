import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { string} from '../../utils'
import { deleteUser } from '../../UserReducer'
// import ButtonComp from '../../components'
import Deletebutton from '../../components/deletebutton/deletebtn'
import { Table } from '../../components'


const Home = () => {
    const users = useSelector((state) => state.users)
const dispatch = useDispatch();

    const handleDelete = (id) =>{
dispatch(deleteUser({id: id}))
    }

    const {heading,id,name,email,action,editbtn,deletebtn,create} = string
  return (
    <div className='container'>
        <h2>{heading}</h2>
        <Link to='/create' className='btn btn-sucess my-3'>{create}</Link>
        <Table
                heading={heading}
                id={id}
                name={name}
                email={email}
                action={action}
                editbtn={editbtn}
                deletebtn={deletebtn}
                handleDelete={handleDelete} 
                users={users}
                />

    </div>
  )
}

export default Home
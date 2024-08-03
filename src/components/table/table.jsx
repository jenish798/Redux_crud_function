import React from "react";
import {Link, useNavigate} from 'react-router-dom'

 const Table = ({
    name,
    id,
    email,
    action,
    users,
    handleDelete, editbtn, deletebtn
 }) =>{

    return(

<table className='table'>
            <thead>
                <tr>
                    <th>{id}</th>
                    <th>{name}</th>
                    <th>{email}</th>
                    <th>{action}</th>
                </tr>
            </thead>
            <tbody>
{users?.map((user, index)=>(
    <tr key={index}>
<td>{user?.id}</td>
<td>{user?.name}</td>
<td>{user?.email}</td>
<td>
    <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>{editbtn}</Link>
    <button onClick={() =>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>{deletebtn}</button>
</td>
    </tr>
))}
            </tbody>
        </table>
    )

}

export default Table
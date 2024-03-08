import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function User() {
    const[user , setUser] = useState([])
    
    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result => setUser(result.data))
      .catch(err => console.log(err))
    })
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/deleteUser/${id}`)
      .then (res => {console.log(res)
      window.location.reload()})
      .catch(errr => console.log(errr))
      
      
      }

    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <Link to='/create' className="btn btn-primary">Add+</Link>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                user.map((index)=>{
                    return(
                        <tr>
                    <td>{index.name}</td>
                    <td>{index.email}</td>
                    <td>{index.age}</td>
                    <td><Link to={`/update/${index._id}`} className="btn btn-success">update</Link></td>
                    <td><button className="btn btn-danger" onClick={(e)=> handleDelete(index._id)}>Delet</button></td>
                     
                   </tr>
                    )
                    
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;

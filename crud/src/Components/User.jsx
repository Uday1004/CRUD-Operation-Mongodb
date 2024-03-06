import React, { useState } from "react";
import { Link } from "react-router-dom";

function User() {
    const[user , setUser] = useState([{
        Name:'uday', Email:'uday@email.com', Age:'19'
    }])
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
                    <td>{index.Name}</td>
                    <td>{index.Email}</td>
                    <td>{index.Age}</td>
                    <td><Link to='/update' className="btn btn-success">update</Link></td>
                    <td><button className="btn btn-danger">Delet</button></td>
                     
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

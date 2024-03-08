import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Updateuser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getUser/${id}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setAge(userData.age);
      } catch (error) {
        console.log("Error fetching user details:", error);
      }
    };

    fetchUserData();
  }, [id]); // Ensure useEffect runs when the ID changes

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age });
      console.log('User updated successfully:', response.data);
      // Optionally, you can reset the form fields after successful submission
      setName('');
      setEmail('');
      setAge('');
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={updateUser}>
          <h2>Update user</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Updateuser;

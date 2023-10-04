import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../environment/environment";
const AdminUsers = ()=>{

const [usersList, setUserList]= useState([]);

  const getUsers = async ()=>{
    console.log("GETTING USERS");
    console.log("TOKEN",localStorage.getItem('token'))
    if (!localStorage.getItem('token')){
      return;
    }
    await axios.get(`${apiUrl}auth/getUsers`,{
      headers:{
        "x-access-token":localStorage.getItem("token")
      }
    }).then((res) => {
      console.log("RES",res.data)
      if (res.data.status === "ok") {
        console.log("SETTING UP",res.data.data)
        setUserList(res.data.data);
          // console.log("Success login");
          // showAlert("success", res.data.message);

      }
      else{
        // setUserList(res.data.data);
          // showAlert("error", res.data.message);
      }
   }).catch((err) => {
      console.error(err);
      // showAlert("error", err);
  })
  }
  useEffect(() => {
    
  getUsers();
}, []);
    return  <React.Fragment>
        <div className="container">
        <div className="title">
            <h2>Users</h2>
        </div>
        <table className="table table-bordered">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
    { usersList.length>0 &&
        usersList.map(x=>{
          return (<tr key={x.id}>
          <td>{x.username}</td>
          <td>{x.email}</td>
          <td>{x.createdAt}</td>
        </tr>)
         
        })
 }
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
    </React.Fragment>
}
export{ AdminUsers};
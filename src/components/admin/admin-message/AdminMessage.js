import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../../environment/environment";
import NoRecordsRow from "../../../shared/UI/no-records-table-row";
const AdminMessage = ()=>{
const [messageList, setMessage]=useState([]);
useEffect(()=>{
    getMessages();
},[])
  const getMessages = async ()=>{
    await axios.get(`${apiUrl}contact/getMessages`,{
      headers:{
        "x-access-token":localStorage.getItem("token")
      }
    }).then((res)=>{
        if(res.data.status==="ok"){
          setMessage(res.data.data);
        }
        else{
          setMessage([]);
        }
    })
  }


    return  <React.Fragment>
        <div className="container">
        <div className="title">
            <h2>Messages</h2>
        </div>
        <table className="table table-bordered">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Message</th>
      <th scope="col">Created At</th>
    </tr>
  </thead>
  <tbody>
    {(messageList&&messageList.length > 0) ? messageList.map(msg=>{
      return (    <tr key={msg.id}>
        {/* <th scope="row">1</th> */}
        <td>{msg.name}</td>
        <td>{msg.email}</td>
        <td>{msg.subject}</td>
        <td>{msg.message}</td>
        <td>{msg.createdAt}</td>
      </tr>)
    }):
    <NoRecordsRow colSpan="6" align="center"></NoRecordsRow>
    }

  </tbody>
</table>
        </div>
    </React.Fragment>
}
export{ AdminMessage};
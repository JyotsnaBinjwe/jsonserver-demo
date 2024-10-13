import React from 'react';
// import { useState } from 'react';

import {useParams,useLocation ,useNavigate} from 'react-router-dom';

function DeleteStudent() {
    let location=useLocation();
    console.log(location.pathname)
    const {pathname}=useLocation();
    let {id}=pathname;
    console.log("Id is "+id);
    let index=pathname.lastIndexOf('/');
    let value=pathname[index+1]
    console.log("value is "+value)
  //  console.log("Path "+pathname)
   // console.log(location)
    let navigate=useNavigate();
    const params=useParams();
    const {idParam}=params;
    console.log(idParam)
    // const [id,setId]=useState();
    function deleteStudent(id){

        fetch(`http://localhost:3001/studs/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                console.log("Deleted..")
            })
        })
        navigate("/")
    }
    return (
        <div>
            <h1>Delete Student</h1>
            
            Id : <input type="text" value={value} /><br/><br/>
            <button onClick={()=>deleteStudent(value)}>Delete Student</button>
 
        </div>
    );
}

export default DeleteStudent;
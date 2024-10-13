import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function Students() {
    const [data,setData]=useState([]);
    let navigate=useNavigate();
    // const history = useHistory();
    
  
    function getList(){
        fetch("http://localhost:3001/studs").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    }
    
    useEffect(()=>{
        getList();
     } ,[]);
     function sendData(item){
        // const data = item;
        // history.push({pathname:'/update',state:data});
     }
    return (
        <div>
            <h1>All Students</h1>
            <Table striped bordered variant="dark">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>subject</th>
                    <th>Marks</th>
                    <th>Operations</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.subject}</td>
                            <td>{item.marks}</td>
                            <td><button onClick={()=>sendData(item)}>Update</button>
                                <button onClick={()=>{
                                    let id=item.id;
                                    navigate("/delete/"+id)}}>Delete</button>
                                {/* <button onClick={()=>deleteStudent(item.id)}>Delete</button> */}
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Students;
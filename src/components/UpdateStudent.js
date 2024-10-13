import React from 'react';
import { useState } from 'react';
import { useNavigate,useLocation} from 'react-router-dom';
function UpdateStudent() {
    let navigate=useNavigate();
    
    const location=useLocation();
    const item=location.state;
    console.log("Object is "+item)
    const [id,setId]=useState();
    const [name,setName]=useState();
    const [subject,setSubject]=useState();
    const [marks,setMarks]=useState();
        
    let updateStudent=()=>{
        let item={
            id:id,
            name:name,
            subject:subject,
            marks:marks
        }
console.log(item)


        navigate("/")
    }
    return (
        <div>
            <h1>Update Student</h1>
            <h1>Insert Student</h1>
            Id : <input type="text" value={item.id} onChange={(e)=>setId(e.target.value)}/><br/><br/>
            Name : <input type="text" value={item.name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            Subject : <input type="text" value={item.subject} onChange={(e)=>setSubject(e.target.value)}/><br/><br/>
            Marks : <input type="text" value={item.marks} onChange={(e)=>setMarks(e.target.value)}/><br/><br/>
            <button onClick={updateStudent}>Update</button>
 
        </div>
    );
}

export default UpdateStudent;
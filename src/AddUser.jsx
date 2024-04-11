import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

const AddUser=()=> {
    const navigate = useNavigate();
    const [id, setId]= useState("");
    const [name, setName]= useState("");
    const [birthday, setBirthday]= useState("");
    const newUser = {
        id,
        name,
        birthday
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        if (id.trim() !== '' && name.trim() !== '') {
            alert("Send data successfully!!!");
            navigate('/', {state: newUser});
            console.log(newUser)
        } else {
            alert("Data does not exist!!");
        }
    }
    
    return (
        <div>
            <h1>Create users</h1>
            <form >
                <div>
                    <label htmlFor="id">Id:</label>
                    <input type="text" name='id' value={id} onChange={(e)=> setId(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="id">Name:</label>
                    <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input type="date" name='birthday' value={birthday} onChange={(e)=> setBirthday(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    )
}
export default AddUser;




// ============================================================= TUTORIAL CODEGYM =====================================


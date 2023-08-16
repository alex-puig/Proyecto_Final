import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function AddItem(props){

    const newData = props.addItem;
    const [description, setDescription] = useState("")

    const handlerAddData   = () =>{
        newData(description)
        setDescription("");
    };

    return <>
        <input type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}>
        </input>

        <Button onClick = {handlerAddData} variant="info" style={{marginLeft: "20px"}}>Add task</Button>

    </>
}
export default AddItem    


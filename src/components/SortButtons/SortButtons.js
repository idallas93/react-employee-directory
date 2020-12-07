import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

// import { useBoolean } from "react-hanger"


const SortButtons = (props) => {

return(
    <div>
    <Button variant="success" onClick={()=>{
        props.setSortByLastName(true)
    }} > Sort by last name </Button>

<Button variant="success" onClick={()=>{
        props.setSortByTitle(true)
    }} > Sort by title </Button>
    </div>
    );
}

export default SortButtons;

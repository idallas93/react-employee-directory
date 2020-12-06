import React from "react";
import "./style.css";
// import { useBoolean } from "react-hanger"


const SortButtons = (props) => {
    // const [users, setUsers] = useState([]);
    // console.log(props)
    // const sortedNames = props.sort()
    // console.log(sortedNames)
    // const sortNames = useBoolean(false)
    // const sorted = props.users.sort((a, b) => {}
        // return b.props.user.name.last - a.props.user.name.last;
    //   ); 

return(
    <div>
    <button type="button" onClick={()=>{
        props.setSortByLastName(true)
    }} > Sort by last name </button>
    <button type="button" onClick={()=>{
        props.setSortByTitle(true)
    }}> Sort by title </button>
    <div className="response">

    </div>

    </div>
    );
}

export default SortButtons;

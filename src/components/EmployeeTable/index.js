import React, {useState, useEffect} from "react";
import axios from "axios"

const EmployeeTable = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
   
            axios.get(`https://randomuser.me/api/?results=20`).then(response => {
                setUsers(response.data.results)
            })
      
    },[])

    const Tile =({first, last, title}) => {
        return(
            <div>
                <h1>{`${title}. ${first} ${last}`}</h1>
            </div>
        )
    }

    const userMap = users.map(function(el, index) {
        return (
            <Tile key={index} first={el.name.first} last={el.name.last} title={el.name.title} />
        )
    })

console.log('USERS ON STATE --> ', users)

    return (
        <div>
          {userMap}
        </div>
    )
}

export default EmployeeTable
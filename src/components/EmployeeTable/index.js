import React, { useState, useEffect } from "react";
import axios from "axios";

const EmployeeTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  const Tile = ({ first, last, title, location, phone }) => {
    return (
      <div className="App">
        <h1>{`${title} ${first} ${last}`}</h1>
      </div>
    );
  };

  const userMap = users.map(function (el, index) {
    return (
      <Tile className="Employee-Tile"
        key={index}
        first={el.name.first}
        last={el.name.last}
        title={el.name.title}
      />
    );
  });

  const sorters = [{}]
  console.log("USERS ON STATE --> ", users);
  console.log("EmployeeTable --> ", EmployeeTable);


  return <div>{userMap}</div>;
};

export default EmployeeTable;

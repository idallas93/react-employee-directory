import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm/SearchForm";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  // set from state
  const [users, setUsers] = useState([]);
  // list copy to filter
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=20`).then((response) => {
      setUsers(response.data.results);
      setFilteredUsers(response.data.results);
    });
  }, []);
  // use effect to listen to the change of the effect

  // function that will set the search form

  const handleInputChange = (event) => {
    // setFilteredUsers(users);
    console.log(event.target.value);
    setSearch(event.target.value);
    const filtered = users.filter((user) => {
      console.log(user);

      return (user.name.title + " " + user.name.first + " " + user.name.last).indexOf(event.target.value) >= 0;
    });
    console.log(filtered)
    // filteredUsers.filter(user => user.indexOf(event.target.value))
    setFilteredUsers(filtered);
  };

  // take filter, sort it and assign it 

  return (
    <div className="App">
      <Nav />
      <SearchForm handleInputChange={handleInputChange} />
      <EmployeeTable filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;

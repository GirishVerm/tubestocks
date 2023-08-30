import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

  const [ListOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    })
  })
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser",
      {

        name: name,
        email: email,
        username: username

      }).then((response) => {
      })
  }
  const deleteUser = () => {
    console.log(ListOfUsers.slice(-1)[0]);
    Axios.delete("http://localhost:3001/deleteUser",
    { 
      data: {
        _id: ListOfUsers.slice(-1)[0]._id,
      name: ListOfUsers.slice(-1)[0].name,
      email: ListOfUsers.slice(-1)[0].email,
      username: ListOfUsers.slice(-1)[0].username
      }
    }).then((response) => {
    })
  }

  return (
    <div className="App">
      <div className="usersDisplay">

        {ListOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}

        <div>
          <input type="text" placeholder='Name' onChange={(currentValue) => { setName(currentValue.target.value); }} />
          <input type="text" placeholder='Email' onChange={(currentValue) => { setEmail(currentValue.target.value); }}/>
          <input type="text" placeholder='Username' onChange={(currentValue) => { setUsername(currentValue.target.value); }}/>
          <button onClick={createUser}>Create User</button>
          <button onClick={deleteUser}>Delete Whale</button>
        </div>

      </div>
    </div>
  );
}

export default App;

import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import UsersList from "./components/Users/UsersList";

function App() {
  // const [usersList, setUsersList] = useState([]);

  // const addUserHandler = (uName, uAge) => {
  //   setUsersList((prevUsersList) => {
  //     return [
  //       ...prevUsersList,
  //       { name: uName, age: uAge, id: Math.random().toString() },
  //     ];
  //   });
  // };

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  console.log(usersList)

  return (
    // Fragment sluzi za grupisanje vise elemenata bez html tagova.
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;

import React from "react";
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

  return (
    <div>
      <AddUser />
      <UsersList users = {[]}/>
    </div>
  );
}

export default App;

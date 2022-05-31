import { useState } from "react";
import "./styles.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
export default function App() {
  const [userList, setUserList] = useState([]);
  let isTrue = userList.length > 0;
  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString().substring(0, 6) }
      ];
    });
  };
  console.log(userList);
  const removeHandler = (id) => {
    setUserList(userList.slice(0, -1));
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      {isTrue && <UserList users={userList} remove={removeHandler} />}
    </div>
  );
}

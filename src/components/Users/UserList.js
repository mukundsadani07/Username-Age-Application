import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={classes.main}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
      <div className={classes.header} onClick={props.remove}>
        Delete User
      </div>
    </Card>
  );
};
export default UserList;

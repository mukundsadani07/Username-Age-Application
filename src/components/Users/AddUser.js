import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // const result = {
    //   username: enteredUsername,
    //   age: enteredAge
    // };
    if (
      !isNaN(enteredName) ||
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values)."
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age(>0)."
      });
      return;
    }
    if (+enteredAge > 122) {
      setError({
        title: "Congratulations! you just broke the record",
        message:
          "You just broke the guiness world of the longest lived human in this world"
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.main}>
        <form onSubmit={submitHandler}>
          <h2 className={classes.heading}>Username</h2>
          <input
            className={classes.input}
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <h2 className={classes.heading}>Age(Years)</h2>
          <input
            className={classes.input}
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <button className={classes.button} type="submit">
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

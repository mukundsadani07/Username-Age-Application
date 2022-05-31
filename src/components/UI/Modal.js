import classes from "./Modal.module.css";
import Card from "./Card";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;

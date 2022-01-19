import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./TodoList.module.css";

function TodoList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log("clicked!");
    console.log(props.text);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={classes.modal_box}>
      <h3>{props.text}</h3>
      <div className={classes.action}>
        <button className="btn btn-danger" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default TodoList;

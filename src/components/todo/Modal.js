import classes from "./Modal.module.css";

function Modal(props) {
  function cancelButton() {
    props.onCancel();
  }

  function confirmButton() {
    props.onConfirm();
  }

  return (
    <div className={classes.modal_popup}>
      <p>Are you sure?</p>
      <button className={"btn btn-primary"} onClick={cancelButton}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={confirmButton}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;

import styles from "./AddTodo.module.css";
import { useState, useRef } from "react";
import WarningPopUp from "./WarningPopUp.jsx";
let AddTodo = ({ onBtnClick }) => {
  // let [taskInput, SettaskInput] = useState("");
  // let [dateInput, SetdateInput] = useState("");
  let [showError, SetshowError] = useState(false);

  const taskInput = useRef();
  const dateInput = useRef();
  
  const onBtnClickHandler = () => {
    const task = taskInput.current.value;
    const date = dateInput.current.value;
    if (
      task === "" ||
      date === "" ||
      task === undefined ||
      date === undefined
    ) {
      SetshowError(!showError);
    } else {
      taskInput.current.value = "";
      dateInput.current.value = "";
      onBtnClick(task, date);
    }
  };

  return (
    <>
      {showError && <WarningPopUp />}
      <div className="col-lg-6">
        <input
          placeholder="Add todo's...."
          type="text"
          name="text"
          ref={taskInput}
          className={`${styles.input}`}
          // value={taskInput}
          // onChange={(e) => SettaskInput(e.target.value)}
        />
      </div>
      <div className="col-lg-3">
        <input
          type="date"
          // value={dateInput}
          className={`${styles.input} ${styles.dateSelector}`}
          ref={dateInput}
          // onChange={(e) => SetdateInput(e.target.value)}
        />
      </div>
      <div className="col-lg-3">
        <button
          className={`${styles.button}`}
          type="button"
          onClick={onBtnClickHandler}
        >
          <span className={`${styles.button__text}`}>Add Item</span>
          <span className={`${styles.button__icon}`}>
            <svg
              className={`${styles.svg}`}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokelinejoin-="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default AddTodo;

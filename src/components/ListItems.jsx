import styles from "./ListItems.module.css";
import { TodoContext } from "../store/Items_Provider";
import { useContext } from "react";
let ListItems = () => {
  const { todoListData } = useContext(TodoContext);
  const { deteleBtnHandler } = useContext(TodoContext);

  return (
    <>
      {todoListData.map((items) => (
        <>
          <div key="52" className="col-6 my-2">
            <div className={`${styles.input}`}>
              <p>{items.task}</p>
            </div>
          </div>
          <div key="32" className="col-3 my-2">
            <div className={`${styles.input}`}>
              <p>{items.date}</p>
            </div>
          </div>
          <div key="12" className="col-3 my-2">
            <button
              className={`${styles.delBtn}`}
              onClick={() => deteleBtnHandler(items.task)}
            >
              Delete
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default ListItems;

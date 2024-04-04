import styles from "./ListItems.module.css";

let ListItems = ({ todoList, delBtnOnClick }) => {
  return (
    <>
      {todoList.map((items) => (
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
              onClick={() => delBtnOnClick(items.task)}
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

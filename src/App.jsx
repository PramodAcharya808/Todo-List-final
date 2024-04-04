import "../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo.jsx";
import Heading from "./components/Heading.jsx";
import ListItems from "./components/ListItems.jsx";
import { useReducer } from "react";

// Reducer function
const reducerAction = (todoListData, actionObject) => {
  let newTodoItem = todoListData;

  if (actionObject.type === "NEW_ITEM") {
    newTodoItem = [
      ...todoListData,
      {
        task: actionObject.payload.taskInput,
        date: actionObject.payload.dateInput,
      },
    ];
  } else if (actionObject.type === "DELETE_ITEM") {
    newTodoItem = todoListData.filter(
      (todos) => todos.task != actionObject.payload.deleteTask
    );
  }
  return newTodoItem;
};

let App = () => {
  // let [todoListData, settodoListData] = useState([]);
  let [todoListData, disptachTodoListData] = useReducer(reducerAction, []);

  const onBtnClickHandler = (taskInput, dateInput) => {
    let newItemObj = {
      type: "NEW_ITEM",
      payload: {
        taskInput,
        dateInput,
      },
    };
    disptachTodoListData(newItemObj);
  };

  const deteleBtnHandler = (taskName) => {
    let newDeleteItemObj = {
      type: "DELETE_ITEM",
      payload: { deleteTask: taskName },
    };

    disptachTodoListData(newDeleteItemObj);
  };

  return (
    <div className={`${styles.outerWrapper}`}>
      <div className="container pt-4">
        <div className="row">
          <Heading></Heading>
          <AddTodo onBtnClick={onBtnClickHandler}></AddTodo>
        </div>
        <div className="row mt-5">
          {todoListData.length === 0 && <h1>List is Empty...</h1>}
          <ListItems
            todoList={todoListData}
            delBtnOnClick={deteleBtnHandler}
          ></ListItems>
        </div>
      </div>
    </div>
  );
};

export default App;

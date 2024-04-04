import { createContext, useReducer } from "react";

const TodoContext = createContext();

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

const TodoContextProvider = ({ children }) => {
  let [todoListData, disptachTodoListData] = useReducer(reducerAction, []);
  const onBtnClickHandlerContext = (taskInput, dateInput) => {
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
    <TodoContext.Provider
      value={{todoListData, onBtnClickHandlerContext, deteleBtnHandler}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };

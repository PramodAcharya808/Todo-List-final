import "../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo.jsx";
import Heading from "./components/Heading.jsx";
import ListItems from "./components/ListItems.jsx";
import { TodoContextProvider } from "./store/Items_Provider.jsx";
import { Welcome_Message } from "./components/Welcome_Message.jsx";
// Reducer function

let App = () => {
  return (
    <TodoContextProvider>
      <div className={`${styles.outerWrapper}`}>
        <div className="container pt-4">
          <div className="row">
            <Heading></Heading>
            <AddTodo></AddTodo>
          </div>
          <div className="row mt-5">
            <Welcome_Message></Welcome_Message>
            <ListItems></ListItems>
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;

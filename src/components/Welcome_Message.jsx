import { TodoContext } from "../store/Items_Provider.jsx";
import { useContext } from "react";

const Welcome_Message = () => {
  const { todoListData } = useContext(TodoContext);
  return <>{todoListData.length === 0 && <h1>Welcome...</h1>}</>;
};

export { Welcome_Message };

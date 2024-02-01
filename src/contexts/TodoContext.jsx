import { createContext, useState } from "react";
import { uid } from "uid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [subtasks, setSubtasks] = useState([]);
  const [powermode, setPowerMode] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [doneSubtasks, setDoneSubtasks] = useState(0);
  const [taskList, setTaskList] = useState(
    JSON.parse(window.localStorage.getItem("taskList")) || [],
  );

  const item = window.localStorage.getItem("tasklLst");

  return (
    <TodoContext.Provider
      value={{
        subtasks,
        taskList,
        setTaskList,
        setSubtasks,
        powermode,
        setPowerMode,
        doneSubtasks,
        setDoneSubtasks,
        filteredList,
        setFilteredList,
        dropdown,
        setDropdown,
        categoryDropdown,
        setCategoryDropdown,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

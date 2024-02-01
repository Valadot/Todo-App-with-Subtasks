import Searchbar from "../components/Searchbar/Searchbar";
import Sort from "../components/Sort/Sort";
import Powermode from "../components/PowerMode/Powermode";
import Category from "../components/Category/Category";
import AddNewTask from "../components/AddNewTask/AddNewTask";
import { StyledLink, Container, SortCategoryWrapper } from "./Home.styles";
import ViewTodos from "../components/viewTodos/ViewTodos";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

// hier filtern onchange machen

const Home = (props) => {
  const {
    taskList,
    setTaskList,
    filteredList,
    setFilteredList,
    setDropdown,
    setCategoryDropdown
  } = useContext(TodoContext);
  const [checked, setChecked] = useState("");

  const handleAscendSort = (Sortvalue, e) => {
    const newList = [...taskList].sort((a, b) => {
      return a[Sortvalue] - b[Sortvalue];
    });
    setTaskList(newList);
    setChecked(e.target.previousElementSibling.textContent);
  };

  const handleDescendSort = (Sortvalue, e) => {
    const newList = [...taskList].sort((a, b) => {
      return b[Sortvalue] - a[Sortvalue];
    });

    setTaskList(newList);
    setChecked(e.target.previousElementSibling.textContent);
  };

  const handleChange = (e) => {
    const newList = [...taskList].filter((task) =>
      task.taskname.includes(e.target.value)
    );

    setFilteredList(newList);
  };

  const handlePowermodeSort = (task) => {
    const newList = [...taskList].sort((a, b) => {
      return b.priority + b.complexity - (a.priority + b.priority);
    });

    setTaskList(newList);
  };

  const handleClick = (e) => {
    setDropdown(false);
    setCategoryDropdown(false);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setFilteredList(taskList);
    document.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [taskList]);

  return (
    <Container>
      <div>
        <Searchbar handleChange={handleChange} />
        <SortCategoryWrapper>
          <Sort
            handleAscendSort={handleAscendSort}
            handleDescendSort={handleDescendSort}
            checked={checked}
          />
          <Category />
        </SortCategoryWrapper>
        <div>
          <Powermode filterList={handlePowermodeSort} />
        </div>

        <ViewTodos filteredList={filteredList} />
        <StyledLink to="/todo/newTodo">
          <AddNewTask />
        </StyledLink>
      </div>
    </Container>
  );
};

export default Home;

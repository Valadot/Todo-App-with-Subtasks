import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewTask from "./pages/NewTask";
import Home from "./pages/Home";
import TaskDetails from "./pages/TaskDetails";
import EditTask from "./pages/EditTask";
import { TodoProvider } from "./contexts/TodoContext";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route exact path="/todo/newTodo" element={<NewTask />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todo/:Todoid" element={<TaskDetails />} />
          <Route exact path="/todo/EditTask/:Todoid" element={<EditTask />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}

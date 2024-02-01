import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";
import { NumberWrapper } from "../components/Priority/Priority.styles";
import Priority from "../components/Priority/Priority";
import Complexity from "../components/Complexity/Complexity";
import TaskButton from "../components/TaskButton/Button";
import {
  TextInput,
  Date,
  Button,
  Form,
  StyledLink,
  DueContainer,
  DueWrapper,
  HeaderWrapper,
  SubtaskContainer,
  SaveTaskLink
} from "./NewTask.styles";
import AddChecklistItem from "../components/AddChecklistItem/AddChecklistItem";
import { uid } from "uid";

const NewTask = () => {
  const [task, setTask] = useState({
    taskname: "",
    created: "",
    timeLeft: "",
    ID: "",
    priority: 0,
    complexity: 0,
    dueDate: "",
    time: "",
    DateTimeObject: "",
    subtasks: [],
    tags: [],
    completed: false
  });
  const { taskList, setTaskList } = useContext(TodoContext);

  const addTask = (e) => {
    setTask({
      ...task,
      taskname: e.target.value,
      created: new window.Date().getTime()
    });
  };

  const handlePriority = (e) => {
    setTask({ ...task, priority: Number(e.target.textContent) });
  };

  const handleComplexity = (e) => {
    setTask({ ...task, complexity: Number(e.target.textContent) });
  };

  const handleDueDate = (e) => {
    const value = e.target.value;

    const newDate = new window.Date(value);

    const formattedDate = newDate.toString().slice(0, 10);
    setTask({ ...task, dueDate: formattedDate, DateTimeObject: value });
  };

  const handletime = (e) => {
    setTask({
      ...task,
      time: e.target.value
    });
  };

  const addSubtask = (e) => {
    const value = e.target.nextElementSibling.value;

    if (!value) {
      alert("Enter a value");
      return;
    }

    setTask({
      ...task,
      subtasks: [
        ...task.subtasks,
        { value, subtaskID: uid(), completed: false }
      ]
    });
    e.target.nextElementSibling.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubtaskChange = (e, value) => {
    task.subtasks.map((subtask) => {
      if (subtask.subtaskID === value) {
        subtask.value = e.target.value;
      }
      return subtask;
    });
  };

  const deleteSubtask = (e, value) => {
    const newSubtaskList = task.subtasks.filter(
      (subtask) => subtask.subtaskID !== value
    );

    setTask({
      ...task,
      subtasks: newSubtaskList
    });
  };

  const addTags = (e) => {
    const value = e.target.value;

    const seperatedValue = value.split(",");

    const tagsWithId = seperatedValue.map((tag) => ({
      id: uid(),
      name: tag
    }));

    setTask({ ...task, tags: tagsWithId });
  };

  const saveTask = (e) => {
    if (task.taskname === "" || task.dueDate === "") {
      alert("please enter a taskname and a dueDate");
      e.preventDefault();
      return;
    } else if (task.DateTimeObject.length > 0 && task.time) {
      setTaskList([
        ...taskList,
        {
          ...task,
          ID: uid(),
          DateTimeObject: new window.Date(
            `${task.DateTimeObject}T${task.time}:00`
          ),
          timeLeft:
            Math.abs(
              new window.Date(
                `${task.DateTimeObject}T${task.time}:00`
              ).getTime() - task.created
            ) /
            (1000 * 60 * 60 * 24)
        }
      ]);
    } else {
      setTaskList([
        ...taskList,
        {
          ...task,
          ID: uid(),
          DateTimeObject: new window.Date(`${task.DateTimeObject}T00:00:00`),
          timeLeft:
            Math.abs(
              new window.Date(`${task.DateTimeObject}T00:00:00`).getTime() -
                task.created
            ) /
            (1000 * 60 * 60 * 24)
        }
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <HeaderWrapper>
          <StyledLink to="/">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000" }} />
          </StyledLink>
          <h3>Add New Task</h3>
        </HeaderWrapper>
        <div>
          <h3>Task Name</h3>
          <TextInput onChange={addTask} required />
        </div>
        <div>
          <h3>Select Priority level</h3>
          <Priority
            handlePriority={handlePriority}
            selectedPriority={task.priority}
          />
        </div>
        <div>
          <h3>Select Complexity level</h3>
          <Complexity
            handleComplexity={handleComplexity}
            selectedComplexity={task.complexity}
          />
        </div>
        <DueContainer>
          <DueWrapper>
            <h4>Select Due Date</h4>
            <Date onChange={handleDueDate} type="date" required />
          </DueWrapper>
          <DueWrapper style={{ marginTop: "4rem" }}>
            <h4>Select Time</h4>
            <Date onChange={handletime} type="time" />
          </DueWrapper>
        </DueContainer>
        <SubtaskContainer>
          <h4>Add Checklist for subtasks</h4>
          <Button onClick={addSubtask}>+</Button>
          <TextInput placeholder="1.Research something..." />
          {task.subtasks &&
            task.subtasks.map((subtask) => (
              <AddChecklistItem
                key={subtask.subtaskID}
                handleSubtaskChange={handleSubtaskChange}
                value={subtask.value}
                task={subtask}
                deleteSubtask={deleteSubtask}
              />
            ))}
        </SubtaskContainer>
        <div>
          <h4>Add Tags</h4>
          <TextInput
            placeholder="Interview, Career, Job..."
            onChange={addTags}
          />
        </div>
        <div>
          <SaveTaskLink to="/">
            <TaskButton handleClick={saveTask}>Save Task</TaskButton>
          </SaveTaskLink>
        </div>
      </div>
    </Form>
  );
};

export default NewTask;

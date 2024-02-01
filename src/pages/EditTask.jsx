import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";
import Priority from "../components/Priority/Priority";
import Complexity from "../components/Complexity/Complexity";
import TaskButton from "../components/TaskButton/Button";
import {
  TextInput,
  Date,
  Button,
  HeaderWrapper,
  Form,
  StyledLink,
  DueContainer,
  DueWrapper,
  SubtaskContainer,
  SaveTaskLink
} from "./EditTask.styles";
import AddChecklistItem from "../components/AddChecklistItem/AddChecklistItem";
import { uid } from "uid";

const EditTask = () => {
  const { taskList, setTaskList } = useContext(TodoContext);
  const { Todoid } = useParams();
  const todo = taskList.find((todo) => todo.ID === Todoid);

  const [editTask, setEditTask] = useState({
    taskname: todo.taskname,
    created: todo.created,
    ID: todo.ID,
    priority: todo.priority,
    complexity: todo.complexity,
    dueDate: todo.dueDate,
    time: todo.time,
    DateTimeObject: todo.DateTimeObject,
    subtasks: todo.subtasks,
    tags: todo.tags,
    completed: todo.completed
  });

  const addTask = (e) => {
    setEditTask({ ...editTask, taskname: e.target.value });
  };

  const handlePriority = (e) => {
    setEditTask({ ...editTask, priority: Number(e.target.textContent) });
  };

  const handleComplexity = (e) => {
    setEditTask({ ...editTask, complexity: Number(e.target.textContent) });
  };

  const handleDueDate = (e) => {
    const value = e.target.value;
    const newDate = new window.Date(value);
    const formattedDate = newDate.toString().slice(0, 10);
    setEditTask({ ...editTask, dueDate: formattedDate });
  };

  const handletime = (e) => {
    setEditTask({ ...editTask, time: e.target.value });
  };

  const addSubtask = (e) => {
    const value = e.target.nextElementSibling.value;

    if (!value) {
      alert("Enter a value");
      return;
    }

    setEditTask({
      ...editTask,
      subtasks: [
        ...editTask.subtasks,
        { value, subtaskID: uid(), completed: false }
      ]
    });
    todo.subtasks = [
      ...editTask.subtasks,
      { value, subtaskID: uid(), completed: false }
    ];
    e.target.nextElementSibling.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubtaskChange = (e, value) => {
    const newSubtaskList = todo.subtasks.map((subtask) => {
      if (subtask.subtaskID === value) {
        subtask.value = e.target.value;
      }
      return subtask;
    });

    setEditTask({ ...editTask, subtasks: [...newSubtaskList] });
  };

  const deleteSubtask = (value) => {
    const newSubtaskList = todo.subtasks.filter(
      (subtask) => subtask.subtaskID !== value
    );

    setEditTask({ ...editTask, subtasks: [...newSubtaskList] });
  };

  const addTags = (e) => {
    const value = e.target.value;

    const seperatedValue = value.split(",");

    const tagsWithId = seperatedValue.map((tag) => ({
      id: uid(),
      name: tag
    }));

    setEditTask({ ...editTask, tags: tagsWithId });
  };

  const saveChanges = (todo) => {
    const newTaskList = taskList.map((task) => {
      if (task.ID === todo.ID) {
        return {
          ...editTask
        };
      }
      return task;
    });
    setTaskList(newTaskList);
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
          <h3>Edit Task</h3>
        </HeaderWrapper>
        <div>
          <h3>Task Name</h3>
          <TextInput defaultValue={todo.taskname} onChange={addTask} />
        </div>
        <div>
          <h3>Select Priority level</h3>
          <Priority
            handlePriority={handlePriority}
            selectedPriority={editTask.priority}
          />
        </div>
        <h3>Select Complexity level</h3>
        <Complexity
          handleComplexity={handleComplexity}
          selectedComplexity={editTask.complexity}
        />
        <DueContainer>
          <DueWrapper>
            <h4>Select Due Date</h4>
            <Date
              defaultValue={todo.dueDate}
              onChange={handleDueDate}
              type="date"
            />
          </DueWrapper>
          <DueWrapper>
            <h4>Select Time</h4>
            <Date defaultValue={todo.time} onChange={handletime} type="time" />
          </DueWrapper>
        </DueContainer>
        <SubtaskContainer>
          <h4>Add Checklist for subtasks</h4>
          <Button onClick={addSubtask}>+</Button>
          <TextInput placeholder="1.Research something..." />
          {todo.subtasks &&
            editTask.subtasks.map((subtask) => (
              <AddChecklistItem
                key={subtask.subtaskID}
                handleSubtaskChange={handleSubtaskChange}
                value={subtask.value}
                task={subtask}
                deleteSubtask={(e) => deleteSubtask(subtask.subtaskID)}
              />
            ))}
        </SubtaskContainer>
        <div>
          <h4>Add Tags</h4>
          <TextInput
            placeholder="Interview, Career, Job..."
            onChange={addTags}
            defaultValue={editTask.tags.map((tag) => tag.name)}
          />
        </div>
        <SaveTaskLink to="/">
          <TaskButton handleClick={(e) => saveChanges(todo)}>
            Save Task
          </TaskButton>
        </SaveTaskLink>
      </div>
    </Form>
  );
};

export default EditTask;

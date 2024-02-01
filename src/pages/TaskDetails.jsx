import { useParams, Link } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";
import React, { useContext, useEffect, useState } from "react";
import { Home } from "./Home";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";
import {
  Container,
  Header,
  StyledLink,
  IconWrapper,
  Card,
  Ball,
  InfoWrapper,
  TaskCompleteWrapper,
  ProgressBar,
  ProgressWrapper,
  SubtaskWrapper,
  Button,
  TaskNumberWrapper,
  BallWrapper,
  ButtonContainer,
  RepeatButton,
  SubtaskContainer,
  DeleteButton
} from "./TaskDetails.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPenToSquare,
  faCalendarDays,
  faArrowsUpDownLeftRight,
  faArrowUp,
  faCheck,
  faArrowsRotate,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const TaskDetails = () => {
  const { taskList, setTaskList } = useContext(TodoContext);
  const { Todoid } = useParams();
  const todo = taskList.find((todo) => todo.ID === Todoid);
  const [doneSubs, setDoneSubs] = useState(0);

  const deleteTodo = (todo) => {
    const newTaskList = taskList.filter((subtask) => subtask.ID !== todo.ID);

    setTaskList(newTaskList);
  };

  const handleClick = (sub) => {
    sub.completed = !sub.completed;
    let doneSubtasks = todo.subtasks.filter((sub) => sub.completed === true)
      .length;
    setDoneSubs(doneSubtasks);
  };

  let doneSubtasks = todo.subtasks.filter((sub) => sub.completed === true)
    .length;

  const handleRepeatTask = (todo) => {
    todo.subtasks.map((sub) => (sub.completed = false));

    let doneSubtasks = todo.subtasks.filter((sub) => sub.completed === true)
      .length;
    setDoneSubs(doneSubtasks);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setDoneSubs(doneSubtasks);
  }, [taskList]);

  if (!todo) return <div>no todo found</div>;

  return (
    <Container>
      <Header>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000" }} />
        </StyledLink>
        <h3>Task Details</h3>
        <IconWrapper>
          <Link to={`/todo/EditTask/${todo.ID}`}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#72767e" }}
            />
          </Link>
        </IconWrapper>
      </Header>
      <Card>
        <BallWrapper>
          <Ball></Ball>
          <h2>{todo.taskname}</h2>
        </BallWrapper>
        <div>
          <InfoWrapper>
            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#000000" }}
              />
            </div>
            <p>
              Due Date:{" "}
              <span>
                {todo.dueDate}, {todo.time}
              </span>
            </p>
          </InfoWrapper>
          <InfoWrapper>
            <div>
              <FontAwesomeIcon icon={faArrowUp} style={{ color: "#000000" }} />
            </div>
            <p>
              Priority: <span>{todo.priority}/10</span>
            </p>
          </InfoWrapper>
          <InfoWrapper>
            <div>
              <FontAwesomeIcon
                icon={faArrowsUpDownLeftRight}
                style={{ color: "#000000" }}
              />
            </div>
            <p>
              Complexity: <span>{todo.complexity}/10</span>
            </p>
          </InfoWrapper>
          <TaskCompleteWrapper>
            <TaskNumberWrapper>
              <h3>Tasks Completed</h3>
              <h3>
                {doneSubs} / {todo.subtasks.length}
              </h3>
            </TaskNumberWrapper>
            <ProgressWrapper>
              <ProgressBar
                doneSubtasks={doneSubs}
                subtasks={todo.subtasks.length}
              ></ProgressBar>
            </ProgressWrapper>
          </TaskCompleteWrapper>
        </div>
      </Card>
      <div>
        <h3>Checklist for subtasks </h3>
      </div>

      <SubtaskContainer>
        {todo.subtasks &&
          todo.subtasks.map((sub) => (
            <React.Fragment key={sub.subtaskID}>
              <SubtaskWrapper completed={sub.completed}>
                {sub.value}
                <Button onClick={(e) => handleClick(sub)}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="2xs"
                    style={{ color: "#000000" }}
                  />
                </Button>
              </SubtaskWrapper>
            </React.Fragment>
          ))}
      </SubtaskContainer>

      <ButtonContainer>
        <div>
          <RepeatButton onClick={(e) => handleRepeatTask(todo)}>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            Repeat Tasks
          </RepeatButton>
        </div>
        <div>
          <Link to="/">
            <DeleteButton onClick={(e) => deleteTodo(todo)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                size="xl"
                style={{ color: "#000000" }}
              />
              Delete Tasks
            </DeleteButton>
          </Link>
        </div>
      </ButtonContainer>
    </Container>
  );
};

export default TaskDetails;

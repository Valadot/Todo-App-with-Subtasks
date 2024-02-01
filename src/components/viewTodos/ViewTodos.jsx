import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import ProgressCircle from "../ProgressCircle/ProgressCircle";
import {
  faCalendarDays,
  faArrowUp,
  faArrowsUpDownLeftRight,
  faPenToSquare,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import {
  LinkCard,
  Container,
  Ball,
  TagWrapper,
  FlexWrapper,
  CardContent,
  IconWrapper,
  DueDateWrapper
} from "./ViewTodos.styles";

const ViewTodos = ({ filteredList }) => {
  const { taskList, powermode, setFilteredList } = useContext(TodoContext);
  const [checked, setChecked] = useState(false);

  window.localStorage.getItem("tasklist");

  const setCompleted = (e, task) => {
    e.preventDefault();
    e.stopPropagation();

    setChecked(!checked);

    task.completed = !task.completed;
  };

  const combinedValue = (todo) => todo.priority + todo.complexity;

  const highestCombinedValue = powermode
    ? Math.max(...filteredList.map((todo) => combinedValue(todo)))
    : null;

  const filteredTodos = powermode
    ? filteredList.filter(
        (todo) => combinedValue(todo) === highestCombinedValue
      )
    : filteredList;

  useEffect(() => {
    setFilteredList(taskList);
  }, [taskList]);

  return (
    <Container>
      {taskList &&
        (powermode && filteredTodos ? (
          filteredTodos.map((task) => (
            <LinkCard
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              to={`/todo/${task.ID}`}
              key={task.ID}
              completed={task.completed}
            >
              <CardContent>
                <FlexWrapper>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <div>
                      <Ball></Ball>
                    </div>
                    {`${task.taskname}`}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "1rem"
                    }}
                  >
                    <Link to={`/todo/EditTask/${task.ID}`}>
                      <IconWrapper>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{ color: "#72767e" }}
                        />
                      </IconWrapper>
                    </Link>

                    <IconWrapper onClick={(e) => setCompleted(e, task)}>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#383333" }}
                      />
                    </IconWrapper>
                  </div>
                </FlexWrapper>
                <FlexWrapper>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        marginLeft: "2px"
                      }}
                    >
                      <div style={{ width: "15px" }}>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          style={{ color: "#000000" }}
                        />
                      </div>
                      <DueDateWrapper dueDate={task.timeLeft}>
                        <p>
                          Due Date:{" "}
                          <span>{[task.dueDate + ", " + task.time]}</span>
                        </p>
                      </DueDateWrapper>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginLeft: "2px"
                      }}
                    >
                      <div style={{ width: "15px", justifyContent: "center" }}>
                        <FontAwesomeIcon
                          icon={faArrowUp}
                          style={{ color: "#000000" }}
                        />
                      </div>

                      {`Priority: ${task.priority} / 10`}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem"
                      }}
                    >
                      <div style={{ width: "15px" }}>
                        <FontAwesomeIcon
                          icon={faArrowsUpDownLeftRight}
                          style={{ color: "#000000" }}
                        />
                      </div>
                      {`Complexity: ${task.complexity} / 10`}
                    </div>
                  </div>
                  <div>
                    <ProgressCircle
                      doneSubtasks={
                        task.subtasks.filter((sub) => sub.completed === true)
                          .length
                      }
                      task={task}
                    />
                  </div>
                </FlexWrapper>
                <div style={{ marginBottom: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {task.tags &&
                      task.tags.map((tag) => (
                        <TagWrapper>{tag.name}</TagWrapper>
                      ))}
                  </div>
                </div>
              </CardContent>
            </LinkCard>
          ))
        ) : (
          <>
            {filteredList.map((task) => (
              <LinkCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                to={`/todo/${task.ID}`}
                key={task.ID}
                completed={task.completed}
              >
                <CardContent>
                  <FlexWrapper>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div>
                        <Ball></Ball>
                      </div>
                      {`${task.taskname}`}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "1rem"
                      }}
                    >
                      <Link to={`/todo/EditTask/${task.ID}`}>
                        <IconWrapper>
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: "#72767e" }}
                          />
                        </IconWrapper>
                      </Link>

                      <IconWrapper onClick={(e) => setCompleted(e, task)}>
                        <FontAwesomeIcon
                          onClick={(e) => setCompleted(e, task)}
                          icon={faCheck}
                          style={{ color: "#383333" }}
                        />
                      </IconWrapper>
                    </div>
                  </FlexWrapper>
                  <FlexWrapper>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "center",
                          marginLeft: "2px"
                        }}
                      >
                        <div style={{ width: "15px" }}>
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            style={{ color: "#000000" }}
                          />
                        </div>
                        <DueDateWrapper dueDate={task.timeLeft}>
                          <p>
                            Due Date:{" "}
                            <span>{[task.dueDate + ", " + task.time]}</span>
                          </p>
                        </DueDateWrapper>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginLeft: "2px"
                        }}
                      >
                        <div
                          style={{ width: "15px", justifyContent: "center" }}
                        >
                          <FontAwesomeIcon
                            icon={faArrowUp}
                            style={{ color: "#000000" }}
                          />
                        </div>

                        {`Priority: ${task.priority} / 10`}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginTop: "1rem"
                        }}
                      >
                        <div style={{ width: "15px" }}>
                          <FontAwesomeIcon
                            icon={faArrowsUpDownLeftRight}
                            style={{ color: "#000000" }}
                          />
                        </div>
                        {`Complexity: ${task.complexity} / 10`}
                      </div>
                    </div>
                    <div>
                      <ProgressCircle
                        doneSubtasks={
                          task.subtasks.filter((sub) => sub.completed === true)
                            .length
                        }
                        task={task}
                      />
                    </div>
                  </FlexWrapper>
                  <div style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {task.tags &&
                        task.tags.map((tag) => (
                          <TagWrapper key={tag.id}>{tag.name}</TagWrapper>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </LinkCard>
            ))}
          </>
        ))}
    </Container>
  );
};

export default ViewTodos;

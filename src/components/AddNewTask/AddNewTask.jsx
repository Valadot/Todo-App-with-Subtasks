import { Container, Span } from "./AddNewTask.styles";

const AddNewTask = (props) => {
  return (
    <Container
      whileHover={{ scale: 1.1, fontWeight: 700 }}
      whileTap={{ scale: 0.9 }}
    >
      <Span onClick={props.newTask}>+</Span> Add New Task
    </Container>
  );
};

export default AddNewTask;

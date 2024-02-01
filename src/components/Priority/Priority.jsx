import { PriorityContainer, NumberWrapper } from "./Priority.styles";

const Priority = ({ handlePriority, selectedPriority }) => {
  const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <PriorityContainer>
      {priorities.map((priority) => (
        <NumberWrapper
          key={priority}
          selected={selectedPriority === priority}
          onClick={handlePriority}
        >
          {priority}
        </NumberWrapper>
      ))}
    </PriorityContainer>
  );
};

export default Priority;

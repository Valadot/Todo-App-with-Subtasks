import { ComplexityContainer, NumberWrapper } from "./Complexity.styles";

const Priority = ({ handleComplexity, selectedComplexity }) => {
  const complexities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ComplexityContainer>
      {complexities.map((complexity) => (
        <NumberWrapper
          key={complexity}
          selected={selectedComplexity === complexity}
          onClick={handleComplexity}
        >
          {complexity}
        </NumberWrapper>
      ))}
    </ComplexityContainer>
  );
};

export default Priority;

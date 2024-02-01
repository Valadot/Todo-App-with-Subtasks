import { ButtonContainer, TaskButton } from "./Button.styles";

const Button = ({ children, handleClick }) => {
  return (
    <ButtonContainer>
      <TaskButton
        onClick={handleClick}
        whileHover={{ scale: 1.1, fontWeight: 700 }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </TaskButton>
    </ButtonContainer>
  );
};

export default Button;

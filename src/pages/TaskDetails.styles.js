import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7.3rem;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  background-color: white;
  width: 35px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  background-color: #ddecf6;
  width: 35px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
`;

export const Card = styled.div`
  background: white;
  width: 380px;
  margin-top: 1rem;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  text-decoration: none;
  color: black;
  margin: 0 auto;
`;

export const BallWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100vw;
  background: blue;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  div {
    width: 20px;
  }
`;

export const TaskCompleteWrapper = styled.div``;

export const TaskNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressWrapper = styled.div`
  background: #f5f5f5;
  height: 20px;
  width: 100%;
  border-radius: 50vw;
`;
export const ProgressBar = styled.div`
  background: hsl(205, 100%, 53%);
  width: ${(props) => (props.doneSubtasks / props.subtasks) * 100 + "%"};
  border-radius: 50vw;
  height: 100%;
  transition: all 0.3s;
`;

export const SubtaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubtaskWrapper = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-radius: 50vw;
  border: 1px solid #dedede;
  background: ${(props) => (props.completed ? "lightgreen" : "white")};
  transition: all 0.35s;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 100%;
  border-style: none;
  background-color: #0d99ff;
  color: white;
  opacity: 1;
  z-index: 0;
  right: 5px;
  bottom: 0px;
  transform: translate(-15%, -15%);
  height: 40px;
  font-size: 3rem;
  position: absolute;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
`;

export const RepeatButton = styled.button`
  width: 420px;
  border-radius: 50vw;
  border: none;
  padding: 0.8rem;
  background: #0d99ff;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 420px;
  border-radius: 50vw;
  border: none;
  padding: 0.8rem;
  background: #ffe0de;
  color: black;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;

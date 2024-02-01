import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LinkCard = styled(motion(Link))`
  background: white;
  width: clamp(300px, 350px, 380px);
  margin-top: 1rem;
  border-radius: 10px;
  padding-left: 1rem;
  text-decoration: none;
  color: black;
  background-color: ${(props) =>
    props.completed ? "rgb(240,255,240)" : "white"};

  ul {
    list-style: none;
    padding-left: 0;
    line-height: 1.4rem;
  }

  li {
    display: flex;
    gap: 0.4rem;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      width: 15px;
    }
  }
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100vw;
  background: blue;
`;

export const Card = styled.div`
  background: white;
`;

export const TagWrapper = styled.li`
  margin-top: 0.4rem;
  display: flex;
  font-weight: 700;

  justify-content: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  padding: 0.3rem;
  background: #e6f5ff;
  border-radius: 100vw;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  :first-child {
    margin-bottom: 1rem;
  }
`;

export const CardContent = styled.div`
  margin-top: 1rem;
`;

export const IconWrapper = styled.div`
  background-color: #ddecf6;
  width: 35px;
  font-size: 20px;
  aspect-ratio: 1/1;
  display: flex;
  margin-left: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 100vh;
  cursor: pointer;
`;

export const DueDateWrapper = styled.div`
  span {
    color: ${(props) =>
      props.dueDate < 1 ? "red" : props.dueDate < 3 ? "orange" : "blue"};
  }
`;

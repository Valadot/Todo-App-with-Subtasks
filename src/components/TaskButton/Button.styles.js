import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const TaskButton = styled(motion.button)`
  border-style: none;
  background-color: #0d99ff;
  padding: 1rem;
  border-radius: 50vw;
  color: white;
  width: 150px;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
`;

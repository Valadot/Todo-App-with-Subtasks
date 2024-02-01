import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.button)`
  border-style: none;
  background-color: #0d99ff;
  padding: 1rem;
  border-radius: 50vw;
  color: white;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  font-family: inter;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
`;

export const Span = styled.span`
  margin-right: 0.5rem;
`;

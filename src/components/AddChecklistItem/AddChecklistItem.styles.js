import styled from "styled-components";

export const TextInput = styled.input`
  width: calc(100%);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-radius: 50vw;
  margin-top: 0.5rem;
  border: 1px solid #dedede;
`;

export const Button = styled.button`
  position: absolute;
  border-radius: 100%;
  border-style: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #ff7361;
  color: white;
  width: 40px;
  opacity: 1;
  z-index: 0;
  right: 0;
  transform: translate(40%, 30%);
  aspect-ratio: 1/1;
  font-size: 2rem;
  position: absolute;
  cursor: pointer;
`;

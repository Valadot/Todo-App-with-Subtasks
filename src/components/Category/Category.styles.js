import styled from "styled-components";

export const Container = styled.button`
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 1rem;
  border: none;
  width: 150px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 50vw;
  margin-top: 1rem;
  cursor: pointer;
`;

export const CategoryWrapper = styled.div`
  display: flex;

  flex-direction: column;
`;

export const CategoryCard = styled.ul`
  background: white;
  list-style: none;
  position: absolute;
  width: 180px;
  padding: 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px grey;
`;

export const TagWrapper = styled.li`
  border-bottom: 1px solid black;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  padding-bottom: 0.3rem;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  font-family: inter;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  margin-left: auto;
`;

export const CategoryLabel = styled.label`
  display: flex;
`;

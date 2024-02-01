import styled from "styled-components";

export const Container = styled.button`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: none;
  width: 150px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
  border-radius: 50vw;
  margin-top: 1rem;
  font-family: inter;
  cursor: pointer;
`;

export const SortOption = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  color: gray;
  margin-right: 0.8rem;
  cursor: pointer;
  :last-child {
    border: none;
  }

  p {
    font-size: 0.9rem;
  }

  :has(Input:checked) {
    color: black;
    font-weight: 700;
  }
`;

export const Div = styled.div`
  background-color: white;
  width: calc(180px - 0.3rem);
  border-radius: 10px;
  padding-left: 0.3rem;
`;

export const Input = styled.input`
  margin-left: auto;
  accent-color: black;
`;

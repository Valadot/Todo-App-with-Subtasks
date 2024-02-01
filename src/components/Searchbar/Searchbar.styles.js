import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: calc(100% - 0.6rem - 0.5rem);
  padding-left: 0.6rem;
  padding-right: 0.5rem;
  border-radius: 100vh;
  border: 1px solid gray;
  align-items: center;
  font-family: inter;

  :has(Input:focus) {
    outline: 1px solid black;
  }
`;

export const Form = styled.form`
  :focus {
    outline: 1px solid red;
    background-color: red;
  }
`;

export const Input = styled.input`
  border: none;
  padding-left: 0.8rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  width: 120%;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: rgb(231, 245, 255);
  border: none;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

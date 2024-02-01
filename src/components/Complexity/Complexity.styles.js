import styled from "styled-components";

export const ComplexityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: clamp(280px, 400px, 500px);
`;

export const ComplexityInput = styled.input`
  opacity: 0;
  width: 30px;
  height: 30px;
  transform: translate(-15%, -10%);
  position: absolute;
  z-index: 2;
  cursor: pointer;
`;

export const ComplexityWrapper = styled.div``;

export const NumberWrapper = styled.div`
  z-index: 0;
  cursor: pointer;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: ${(props) => (props.selected ? "#0F9BFF" : "#DEECF6")};
  color: ${(props) => (props.selected ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

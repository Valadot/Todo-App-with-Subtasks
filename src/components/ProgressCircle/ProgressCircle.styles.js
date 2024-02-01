import styled from "styled-components";

export const ProgressRing = styled.svg``;

export const ProgressRingCircle = styled.circle`
  fill: none;
  stroke: #ddd;
`;

export const ProgressRingInnerCircle = styled.circle`
  fill: none;
  stroke: red;
  strokedasharray: ${(props) => props.dashArray};
  strokedashoffset: ${(props) => props.dashOffset};
`;

export const Circle = styled.div`
/* background-color: ${(props) => props.calculateCircleColor} */
width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; /* Set the center to white */
`;

export const OuterCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid red; /* Set the outer border to red */
  border-radius: 50%;
  transform: rotate(0deg); /* Rotate the border to start from the top */
  transition: transform 0.5s; /* Add a transition for a smooth rotation */
`;

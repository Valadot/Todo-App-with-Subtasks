import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: inter;
  background-color: rgb(245, 245, 245);
`;

export const Date = styled.input`
  ::-webkit-calendar-picker-indicator {
    filter: brightness(0) saturate(100%) invert(60%) sepia(46%) saturate(7373%)
      hue-rotate(184deg) brightness(102%) contrast(101%);
  }
  width: 140px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 50vw;
  border: none;
  border: 1px solid #dedede;
  font-family: inter;
`;

export const StyledLink = styled(Link)`
  background-color: white;
  width: 35px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
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
  right: -35px;
  transform: translate(-10%, 10%);
  height: 40px;
  font-size: 3rem;
  position: absolute;
  cursor: pointer;
`;

export const DueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110%;
`;

export const DueWrapper = styled.div`
  margin-top: 4rem;
`;

export const SubtaskContainer = styled.div`
  position: relative;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`;

export const TextInput = styled.input`
  width: calc(100% + 1.5rem);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-radius: 50vw;
  border: 1px solid #dedede;

  ::-webkit-input-placeholder {
    font-family: inter;
  }
`;

export const SaveTaskButton = styled.button`
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
`;

export const SaveTaskLink = styled(Link)`
  text-decoration: none;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  width: clamp(300px, 360px, 370px);
  margin: 0 auto;
`;

export const SortCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  margin: auto;
  padding: 30px;
`;

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

export default Main;

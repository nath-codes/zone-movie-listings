import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-right: 30px;
`;

const Header = ({ children }) => <StyledForm>{children}</StyledForm>;

export default Header;

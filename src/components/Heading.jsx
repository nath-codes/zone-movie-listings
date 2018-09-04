import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h2``;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;

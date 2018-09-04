import React from "react";
import styled from "styled-components";
import Container from "./Container";

const StyledHeader = styled.header`
  background: #333;
  padding: 10px 0;
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <svg
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31 32"
        class="jsx-2735423973"
      >
        <path
          fill="#fff"
          d="M6.83772.75172L2.0797 7.8679h14.00937L0 31.9072h25.16186l4.79772-7.18017H14.9798L31 .75172z"
          class="jsx-2735423973"
        />
      </svg>
    </Container>
  </StyledHeader>
);

export default Header;

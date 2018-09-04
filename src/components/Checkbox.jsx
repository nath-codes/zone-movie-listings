import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCheckbox = styled.input``;
const StyledLabel = styled.label``;

const Checkbox = ({ id, name, value, checked, handleChange }) => (
  <StyledLabel>
    <StyledCheckbox
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={handleChange}
    />
    {value}
  </StyledLabel>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

export default Checkbox;

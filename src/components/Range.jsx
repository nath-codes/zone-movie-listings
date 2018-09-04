import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";

const StyledRange = styled.input``;
const StyledLabel = styled.label``;

const Range = ({ name, min, max, step, value, handleChange }) => (
  <StyledLabel>
    <Heading>Rating</Heading>
    <StyledRange
      type="range"
      name={name}
      min={min}
      max={max}
      step={step}
      onChange={handleChange}
      value={value}
    />
  </StyledLabel>
);

Range.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Range;

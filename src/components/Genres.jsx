import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

const StyledGenres = styled.ol`
  li {
    margin-bottom: 5px;

    &:last-child {
      marging-bottom: 0;
    }
  }
`;

const isCheckboxActive = (id, selectedGenres) =>
  selectedGenres.indexOf(id) !== -1;

const Genres = ({ genres, selectedGenres, handleChange }) => (
  <React.Fragment>
    <h2>Genres</h2>
    <StyledGenres>
      {genres.map(({ id, name }) => (
        <li key={id}>
          <Checkbox
            id={id}
            type="checkbox"
            name="genre"
            value={name}
            checked={isCheckboxActive(id, selectedGenres)}
            handleChange={handleChange}
          />
        </li>
      ))}
    </StyledGenres>
  </React.Fragment>
);

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  selectedGenres: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Genres;

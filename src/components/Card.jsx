import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";

const StyledCard = styled.div`
  margin: 0 30px 30px 0;
`;

const Card = ({ title, genres, posterUrl }) => (
  <StyledCard>
    <div>
      <img src={posterUrl} alt={title} />
    </div>
    <Heading>{title}</Heading>
    <ul>
      {genres.map(genre => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  posterUrl: PropTypes.string.isRequired
};

export default Card;

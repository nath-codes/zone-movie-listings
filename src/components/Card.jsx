import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";

const StyledCard = styled.div`
  margin: 0 30px 30px 0;

  .genres {
    margin: 15px 0;
  }
`;

const Card = ({ title, genres, posterUrl, rating, popularity }) => (
  <StyledCard>
    <div>
      <img src={posterUrl} alt={title} />
    </div>
    <Heading>{title}</Heading>
    <div>
      <b>Genres</b>
    </div>
    <ul className="genres">
      {genres.map(genre => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
    <div>
      <b>Rating</b> {rating}
    </div>
    <div>
      <b>Popularity</b> {popularity}
    </div>
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  posterUrl: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default Card;

import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Heading from "./Heading";

const StyledMovies = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
  overflow: scroll;

  .no-results-mgs {
    flex-direction: column;
  }
`;

const getGenreTitles = (genreIds, genres) =>
  genreIds
    .map(genreId => {
      const filteredGenres = genres.filter(genre => genre.id === genreId);
      const { name } = filteredGenres[0];
      return name;
    })
    .sort();

const Movies = ({ movies, posterBaseUrl, genres }) => (
  <StyledMovies>
    {!movies.length ? (
      <React.Fragment>
        <div className="no-results-mgs">
          <Heading>Whoops!</Heading>
          <p>
            Sorry, no matches match the selected criteria, please try again.
          </p>
        </div>
      </React.Fragment>
    ) : (
      movies.map(
        ({ id, title, genre_ids, poster_path, vote_average, popularity }) => (
          <Card
            key={id}
            title={title}
            genres={getGenreTitles(genre_ids, genres)}
            posterUrl={`${posterBaseUrl}/w342/${poster_path}`}
            rating={vote_average}
            popularity={popularity}
          />
        )
      )
    )}
  </StyledMovies>
);
export default Movies;

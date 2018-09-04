import { createSelector } from "reselect";

const getMovies = state => state.movies.movies;
const getRatingFilter = state => state.movies.ratingsFilter;
const getAllGenres = state => state.genres.genres;
const getSelectedGenres = state => state.genres.selected;

const getMovieGenreIds = createSelector([getMovies], movies => {
  const movieGenreIds = movies.reduce((genresIds, movie) => {
    genresIds.push(...movie.genre_ids);
    return genresIds;
  }, []);
  // returns unique movie genre ids
  return Array.from(new Set(movieGenreIds));
});

export const getAvailableGenres = createSelector(
  [getMovieGenreIds, getAllGenres],
  (movieIds, genres) =>
    genres.filter(genre => movieIds.indexOf(genre.id) !== -1)
);

export const getFilteredMovies = createSelector(
  [getRatingFilter, getSelectedGenres, getMovies],
  (rating, genres, movies) =>
    movies.filter(movie => {
      const genreMatch = movie.genre_ids.some(id => genres.indexOf(id) !== -1);
      const ratingMatch = movie.vote_average >= rating;
      return genreMatch && ratingMatch;
    })
);

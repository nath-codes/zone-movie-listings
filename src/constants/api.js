const baseUrl = process.env.REACT_APP_MOVIE_DB_API_ENDPOINT;

const moviesApiUrl = `${baseUrl}/movie/now_playing`;
const genresApiUrl = `${baseUrl}/genre/movie/list`;
const configApiUrl = `${baseUrl}/configuration`;

export { moviesApiUrl, genresApiUrl, configApiUrl };

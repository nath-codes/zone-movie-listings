import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesFetch, moviesRatingFilterUpdate } from "./actions/movies";
import { genresFetch, genreToggle } from "./actions/genres";
import { configFetch } from "./actions/config";
import { getAvailableGenres, getFilteredMovies } from "./selectors";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Genres from "./components/Genres";
import Range from "./components/Range";
import Movies from "./components/Movies";
import Spinner from "./components/Spinner";

import "./styles/global";

class App extends Component {
  componentDidMount() {
    const { moviesFetch, genresFetch, configFetch } = this.props;
    moviesFetch();
    genresFetch();
    configFetch();

    this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
    this.handleRatingFilterUpdate = this.handleRatingFilterUpdate.bind(this);
  }

  isLoaded() {
    const { moviesIsFetching, genresIsFetching, configIsFetching } = this.props;
    return !moviesIsFetching && !genresIsFetching && !configIsFetching;
  }

  handleCheckboxToggle(event) {
    const { id } = event.target;
    this.props.genreToggle(Number(id));
  }

  handleRatingFilterUpdate(event) {
    const { value } = event.target;
    this.props.ratingFilter(value);
  }

  render() {
    const {
      movies,
      genres,
      selectedGenres,
      ratingsFilter,
      posterBaseUrl
    } = this.props;

    if (!this.isLoaded()) {
      return <Spinner />;
    }

    return (
      <React.Fragment>
        <Header />
        <Main>
          <Form>
            <Range
              name="rating"
              min={0}
              max={10}
              step={0.5}
              value={ratingsFilter}
              handleChange={this.handleRatingFilterUpdate}
            />

            <div>
              Rating <b>{ratingsFilter} or more</b>
            </div>

            <Genres
              genres={genres}
              selectedGenres={selectedGenres}
              handleChange={this.handleCheckboxToggle}
            />
          </Form>
          <Movies
            movies={movies}
            posterBaseUrl={posterBaseUrl}
            genres={genres}
          />
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  moviesIsFetching: state.movies.fetching,
  ratingsFilter: state.movies.ratingsFilter,
  genresIsFetching: state.genres.fetching,
  selectedGenres: state.genres.selected,
  configIsFetching: state.config.fetching,
  posterBaseUrl: state.config.config.base_url,
  genres: getAvailableGenres(state),
  movies: getFilteredMovies(state)
});

const mapDispatchToProps = dispatch => ({
  moviesFetch: () => dispatch(moviesFetch()),
  genresFetch: () => dispatch(genresFetch()),
  configFetch: () => dispatch(configFetch()),
  genreToggle: id => dispatch(genreToggle(id)),
  ratingFilter: value => dispatch(moviesRatingFilterUpdate(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { useEffect, useState } from "react";
import "./maincart/maincart.css";
import Navbar from "./Navbar/Navbar";
import Cart from "./maincart/Cart";
import axios from "axios";
const apiKey = "9ad4fac2fbac8f9f1aab238f87579572";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/original/";

function MainHomepage() {
  const [upcomingMovie, setUpcomingMovie] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovie(results);
    };

    const fetchnowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    const fetchtopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    fetchUpcoming();
    fetchnowPlaying();
    fetchpopular();
    fetchtopRated();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="mainhomepage_container">
      <nav>
        <Navbar />
      </nav>
      <div className="mainhomepage_body">
        <h2>Up Coming</h2>
        <div className="mainhomepage_cart">
          {upcomingMovie.map((movie) => (
            <Cart key={movie.id} img={`${imgUrl}/${movie.poster_path}`} />
          ))}
        </div>
      </div>
      <div className="mainhomepage_body">
        <h2>Now Playing</h2>
        <div className="mainhomepage_cart">
          {nowPlayingMovies.map((movie) => (
            <Cart key={movie.id} img={`${imgUrl}/${movie.poster_path}`} />
          ))}
        </div>
      </div>
      <div className="mainhomepage_body">
        <h2>Popular</h2>
        <div className="mainhomepage_cart">
          {popularMovies.map((movie) => (
            <Cart key={movie.id} img={`${imgUrl}/${movie.poster_path}`} />
          ))}
        </div>
      </div>
      <div className="mainhomepage_body">
        <h2>Top Rated</h2>
        <div className="mainhomepage_cart">
          {topRatedMovies.map((movie) => (
            <Cart key={movie.id} img={`${imgUrl}/${movie.poster_path}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainHomepage;

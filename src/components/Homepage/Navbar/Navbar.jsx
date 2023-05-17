import React from 'react'
import "./navbar.css"
import { ImSearch } from "react-icons/im";

function Navbar() {
  return (
    <>
      <div className="mainhomenavbar_container">
        <div className="mainhomenavbar_logo">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="logo"
          />
        </div>
        <div className="mainhomenavbar_links">
          <ul>
            <li>TV Shows</li>
            <li>Movie</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="mainhomenavbar_search">
          <ImSearch />
        </div>
      </div>
    </>
  );
  }
export default Navbar

// api key = 9ad4fac2fbac8f9f1aab238f87579572
// API Request = https://api.themoviedb.org/3/movie/550?api_key=9ad4fac2fbac8f9f1aab238f87579572
// API Read Access Token (v4 auth) = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWQ0ZmFjMmZiYWM4ZjlmMWFhYjIzOGY4NzU3OTU3MiIsInN1YiI6IjY0NTc4YmMwNmM4NDkyMDE0MzNlYjk3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2L9F9oj2gZ1ySubeGDDzDn04Q5AIELGAwk1Qy2TdJU

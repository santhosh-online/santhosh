import React, { useState } from "react";
import "./assets/styles/style.css";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";
import Popup from "./Popup";

function Movieapi() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "https://www.omdbapi.com/?i=tt3896198&apikey=f0fdaa9e";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  return (
    <div className="container">
      <div className="movie-name">
        <h1>Movie Database</h1>
      </div>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closerPopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default Movieapi;

import React, { useState } from "react";
import "./index.css";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import Popup from "./components/Popup.js";
import { logDOM } from "@testing-library/react";

function App() {
  const [state, setState] = useState({
    input: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=ceb4ab38";

  const handleInput = (e) => {
    let userInput = e.target.value;
    console.log(userInput);

    setState({
      ...state,
      input: userInput,
    });
  };

  const openPop = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return {
          ...prevState,
          selected: result,
        };
      });
    });
  };

  const closePopup = () => {
    setState((state) => {
      return {
        ...state,
        selected: {},
      };
    });
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.input).then(({ data }) => {
        let results = data.Search;
        console.log(results, "these are the results");
        setState((state) => {
          return {
            ...state,
            results: results,
          };
        });
      });
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Movie Database </h1>{" "}
      </header>{" "}
      <main>
        <Search handleInput={handleInput} search={search} />{" "}
        <Results results={state.results} openPop={openPop} />{" "}
        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}{" "}
      </main>{" "}
    </div>
  );
}

export default App;

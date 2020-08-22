import React, { useState } from 'react';
import './App.css';
import Search from './components/Search'
import axios from "axios";
import Results from './components/Results'

function App() {

  const [state, setState] = useState({
    input: "",
    results: []
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=ceb4ab38";
  

  const handleInput = (e) => {
    let userInput = e.target.value;
    
    setState({
      ...state,
      input: userInput
    })
  }

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.input).then(({ data }) => {
        let results = data.Search;
        console.log(results, "these are the results");
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  return (
    <div className="App">
      <h1>Movie Database Search</h1>
      <Search handleInput={handleInput} search={search} />
      <div className="movies">
        {state.results.map(result => (
          <Results key={result.imdbID} result={result}  />
        ))}
      </div>
    </div>
  );
}

export default App;

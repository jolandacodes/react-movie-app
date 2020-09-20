import React from 'react'

function Result({ result, openPop }) {
	return (
		<div className="movie" onClick={() => openPop(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result

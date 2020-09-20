  import React from 'react'

function Result({ result, Popup }) {
	return (
		<div className="movie" onClick={() => Popup(result.imdbID)}>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result

import React from 'react'

import Result from './Result'

function Results ({ results, Popup }) {
	return (
		<section className="movies">
			{results.map(result => (
				<Result key={result.imdbID} result={result} Popup={Popup} />
			))}
		</section>
	)
}

export default Results
import React from 'react'

export default function Results({result}) {
    return (
        <div className="movie">
            <img src={result.Poster} alt="movie poster"/>
            <h3>{result.Title}</h3>
        </div>
    )
}

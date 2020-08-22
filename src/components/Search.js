import React from 'react'

export default function Search({handleInput, search}) {
    return (
        <div>
            <input type="text" className="input" onKeyPress={search} onChange={handleInput} placeholder="Search for a movie here" />
        </div>
    )
}

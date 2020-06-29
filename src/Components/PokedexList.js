import React, { useState }  from "react";

//displays all original pokemon in a list

function PokeList(props) {

    const [currentPokemon, setCurrentPokemon] = useState('blarbasaur')

    let pokemonList = ''

    //console.log(props.pokemonData)
    if(props.pokemonData[0]) {

    pokemonList = props.pokemonData.map(pokemon => {

        

        const handleClick = (e) => {
            e.preventDefault()
            props.handleClick(pokemon.url)
            setCurrentPokemon('')
        }

        return (
            <div className="pokelist" key={pokemon.name}>
              <button onClick={handleClick} className="poke-list-item">
                {pokemon.name}
            </button>
            </div>
          );
          
    })
}
    //console.log(currentPokemon)
    
    
    return (
      <div>
          <h1>Pokemon List</h1>
        <div>{pokemonList}</div>
      </div>
    );
}

export default PokeList;
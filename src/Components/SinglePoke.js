import React, {useState}  from "react";

//sets state to clicked pokemon and displays full description

function PokeInfo(props) {
    const [teamPokemon, setTeamPokemon] = useState([])
    //  console.log(props.pokemonForms)
    //   console.log(props.pokemonHeight)
    //   console.log(props.pokemonWeight)

    if (!props.pokemonForms) {
        return <p>Pick a Pokemon</p>;
      }
      let namesToDisplay = props.pokemonForms.map((pokemon) => pokemon.name)

      //console.log(namesToDisplay)

    

    const handleTeamClick = (e) => {
        e.preventDefault()
        teamPokemon.push({
            name: namesToDisplay,
            height: props.pokemonHeight,
            weight: props.pokemonWeight
            })
        console.log(teamPokemon)
        props.handleTeamClick(teamPokemon)
        //setTeamPokemon([...teamPokemon])
    }
    
    
    return (
        <div className='card'>
            <h1>Name: {namesToDisplay}</h1>
            <h2>Height: {props.pokemonHeight}</h2>
            <h2>Weight: {props.pokemonWeight}</h2>
            <button onClick={handleTeamClick}>Add to Team</button>
        </div>
    );
}

export default PokeInfo;
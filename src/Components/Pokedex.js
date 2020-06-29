import React, {useState, useEffect}  from "react";
import PokeList from '../PokeList/PokeList'
import PokeInfo from "../PokeInfo/PokeInfo";

function Pokedex(props) {
    const [currentPokemon, setCurrentPokemon] = useState('')
    const [newPokemonData, setNewPokemonData] = useState({})

    const handleTeamClick = props.handleTeamClick

    const handleClick = pokemon => {
        setCurrentPokemon(pokemon)
    }

    const pokemonData = props.pokemonData

    //console.log(currentPokemon)

    useEffect( () => {
        const singlePokemonUrl = currentPokemon;
        const makeApiCall = async () => {
          const res = await fetch(singlePokemonUrl)
          const json = await res.json()
          setNewPokemonData(json)
          //console.log(json)
        }
        makeApiCall()
      }, [currentPokemon])

      //console.log(newPokemonData)


      let pokemonForms = newPokemonData.forms
      //console.log(pokemonForms)



      let pokemonHeight = newPokemonData.height
      let pokemonWeight = newPokemonData.weight

    
    return (
      <div className="pokedex-flex">
        <PokeList handleClick={handleClick} pokemonData={pokemonData} />
        {newPokemonData ? <PokeInfo pokemonHeight={pokemonHeight} pokemonWeight={pokemonWeight} pokemonForms={pokemonForms} handleTeamClick={handleTeamClick} /> : null}
      </div>
    );
}

export default Pokedex;
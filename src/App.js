import React, {useEffect, useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import MyTeam from './components/MyTeam/MyTeam'
import Pokedex from './components/Pokedex/Pokedex'
import Home from './components/Home/Home'

function App() {

  const [pokemonData, setPokemonData] = useState({})
  const [teamPokemon, setTeamPokemon] = useState([])


  useEffect( () => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const makeApiCall = async () => {
      const res = await fetch(pokemonUrl)
      const json = await res.json()
      setPokemonData(json.results)
    }
    makeApiCall()
  }, [])

  const handleTeamClick = pokemon => {
    setTeamPokemon(pokemon)
    
}
console.log(teamPokemon)

  return (
    <div className="App">
      <nav className='header-flex'>
      <Link to="/" id="home" className='header-item'>
        <h1>POKEMON</h1>
      </Link>
      <Link to="/pokedex" id="pokedex" className='header-item'>
        <h1>Pokedex</h1>
      </Link>
      <Link to='/my-team' id="my-team" className='header-item'>
        <h2>My Team</h2>
      </Link>
      </nav>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pokedex' render={routerProps => pokemonData ? <Pokedex {...routerProps} pokemonData={pokemonData} handleTeamClick={handleTeamClick} /> : null}/>
      <Route path='/my-team' render={routerProps => teamPokemon ? <MyTeam {...routerProps} teamPokemon={teamPokemon}/> : null }/>
      </Switch>
    </div>
  );
}

export default App;
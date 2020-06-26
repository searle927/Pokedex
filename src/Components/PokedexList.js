import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import SinglePoke from './SinglePoke'

function PokedexList() {
    const [pokeList, setPokeList]= useState([])
}
    useEffect( () => {
    const url='https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    const makeAPICall= async()=>{
        const res = await fetch(url)
        const json = await res.json()
        setPokeList(json.results)
    }

    

useEffect(() => {
    getAllPoke();
}, []);
    
const handleClick = (e) => {
    console.log(e.target.innerText);
    let SinglePoke = PokedexList.filter(poke => {
        return poke.name === e.target.innerText;
    })

    console.log(singlePokemon[0].url)
}

let displayPoke = <h1>Loading</h1>
if(listOfPoke[0]) {
    displayPoke = listOfPoke.map(poke => {
        return <p onClick={handleClick}>{poke.name}</p>
    })
}
return (
<div className="App">
    {displayPoke}
    <SinglePoke URL={selectedURL}/>
</div>
);
}
   
export default PokedexList;
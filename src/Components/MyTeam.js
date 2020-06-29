import React  from "react";

function MyTeam(props) {

    console.log(props.teamPokemon)
    
    if (!props.teamPokemon) {
        return <p>You haven't started a team yet</p>;
      }
    let pokeCards = props.teamPokemon.map(element => {
        return (
            
            <div className='card'>
                <h1>Name: {element.name[0]}</h1>
                <h2>Height: {element.height}</h2>
                <h2>Weight: {element.weight}</h2>
            </div>
        )
    })
    
    return (
      <div>
        <h1>My Team</h1>
        <div className='card-flex'>{pokeCards}</div>
      </div>
    );
}
export default MyTeam;
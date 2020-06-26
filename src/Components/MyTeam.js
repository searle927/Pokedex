  import React  from "react";

function MyTeam(props) {

    console.log(props.pokeTeam)
    
    let pokeCards = props.pokeTeam.map(element => {
        return (  
            <div className='card'>
                <h1>Name: {element.name[0]}</h1>
                <p>Height: {element.height}</p>
                <p>Weight: {element.weight}</p>
            </div>
        )
    })
    
    return (
      <div>
        <h1>My Poke Team</h1>
        <div className='card-flex'>{pokeCards}</div>
      </div>
    );
}
export default MyTeam;
import React, { useEffect, useState } from 'react'

function SinglePoke(props) {
    console.log(props)
    let reset=(            
    <form onSubmit={props.removeName}>
        <input type="submit" value="Reset Team"/>
    </form>)
    let favList=props.myTeam.map((pokemon,index)=>{
        let imgURL=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.myTeamID[index]}.png`
        return (
            <>
            <img src={imgURL} alt=''/> 
            <h2>{pokemon}</h2>
            </>
        )
    })
    return (
        <div className='fav'>
            {props.myTeam.length? reset:null}
        {favList}
            </div>
    )
}

export default SinglePoke;
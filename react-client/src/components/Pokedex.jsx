import React from 'react'
import PokedexEntry from './PokedexEntry.jsx'
// import styles from '../../dist/stylesheet.css'



const PokedexList = (props) => {
  return (
    <div className="modal">
      {props.pokedex.map((pokemonentry, index) => {
        return <PokedexEntry pokemon={pokemonentry} key={index}/>
      })}
    </div>
  )
}

export default PokedexList
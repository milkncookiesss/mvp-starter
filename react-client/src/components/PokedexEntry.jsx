import React from 'react'

const PokedexEntry = (props) => {
  return (
    <div className=".modal-content">
      <img src={props.pokemon.poke_img} /> <a>{props.pokemon.poke_name}</a>
    </div>
  )
  
}

export default PokedexEntry
import React from 'react'

const Pokemon = (props) => (
  <div>
    <img src={props.pokemon.img} width="250" height="250" onClick={props.onCatch}/>
  </div>
)

export default Pokemon
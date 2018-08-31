import React from 'react'

const Pokemon = (props) => (
  <div>
    <img src={props.pokemon.img} width="500" height="500"></img>
  </div>
)

export default Pokemon
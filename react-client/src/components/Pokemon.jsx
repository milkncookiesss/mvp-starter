import React from 'react'

// const Pokemon = (props) => (
//   <div>
//     <h2>{props.pokemon.name}</h2>
//     <img src={props.pokemon.img} width="250" height="250" onClick={props.onCatch}/>
//   </div>
// )

class Pokemon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: this.props.pokemon,
      // isHidden: true
    }
  }
  render() {
    return (
    <div className="middle">
    <h2>{this.props.pokemon.name}</h2>
    <img src={this.props.pokemon.img} width="250" height="250" onClick={this.props.onCatch}/>
  </div>
    )
  }
}

export default Pokemon
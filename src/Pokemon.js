// Props: https://beta.reactjs.org/learn/describing-the-ui

// State: https://beta.reactjs.org/learn/adding-interactivity

import { useState } from "react";

export function Pokemon(props) {
  console.log("props", props)
  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  console.log(props.togglePokemonId)


  function catchPokemon(event) {
    console.log("id", props.id)
    props.catchFun(props.id)
  }


  return (
    <div
      class="pokemon"
      style={{
        backgroundColor: props.caught ? "red" : "green",
      }}
    >

      <p class="pokemon__name">{props.name}</p>
      <img
        src={imgPokemon}
        class="pokemon__image"
        alt="pikachu himself"
      />
      <button
        onClick={catchPokemon}
        type="button"
        className="pokemon__button"
      >
        {props.caught ? "Отпустить" : "Поймать"}
      </button>
    </div>
  )
}



// export function Pokemon() {}
// ↓
// import { Pokemon } from "./component/Pokemon"

// export default function() {}
// export default function Pokemon() {}
// ↓
// import Pokemon from "./component/Pokemon"
// import RGbuthgierghi from "./component/Pokemon"




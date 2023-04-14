// Props: https://beta.reactjs.org/learn/describing-the-ui

// State: https://beta.reactjs.org/learn/adding-interactivity

import { useState } from "react";

export function Pokemon(props) {
  console.log("props", props)
  const [caught, setCaught] = useState(false);

  const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

  // console.log("txxxxx", { funMagnificationСounter })


  function catchPokemon(event) {
    console.log("text", event);
    //setCaught(true);
    setCaught(prev => !prev);
    if (!caught) {
      props.funMagnificationСounter()
    } else {
      props.funReductionCounter()
    }
    //props.funMagnificationСounter()
  }


  return (
    <div
      class="pokemon"
      style={{
        backgroundColor: caught ? "red" : "green",
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
        {caught ? "Отпустить" : "Поймать"}
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




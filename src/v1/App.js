import { Pokemon } from "./Pokemon";
import { useState } from "react";

const pokemons = [
  {
    name: "bulbasaur",
    id: "1"
  },
  {
    name: "ivysaur",
    id: "2"
  },
  {
    name: "venusaur",
    id: "3"
  },
  {
    name: "charmander",
    id: "4"
  },
  {
    name: "charmeleon",
    id: "5"
  },
  {
    name: "charizard",
    id: "6"
  },
  {
    name: "squirtle",
    id: "7"
  },
  {
    name: "wartortle",
    id: "8"
  },
  {
    name: "blastoise",
    id: "9"
  },
  {
    name: "caterpie",
    id: "10"
  },
  {
    name: "metapod",
    id: "11"
  },
  {
    name: "butterfree",
    id: "12"
  },
  {
    name: "weedle",
    id: "13"
  },
  {
    name: "kakuna",
    id: "14"
  },
  {
    name: "beedrill",
    id: "15"
  },
  {
    name: "pidgey",
    id: "16"
  },
  {
    name: "pidgeotto",
    id: "17"
  },
  {
    name: "pidgeot",
    id: "18"
  },
  {
    name: "rattata",
    id: "19"
  },
  {
    name: "raticate",
    id: "20"
  },
];

export function App() {
  // return (
  //   <div className="pokemonsList">
  //     <Pokemon id="1" name="bulbasaur" />
  //     <Pokemon id="2" name="pikachu" />
  //     <Pokemon id="25" name="raticate" />
  //   </div>
  // )
  const [count, setCount] = useState(0);

  function magnificationСounter() {
    console.log("demo")
    setCount(prev => prev + 1)
  }
  function reductionCounter() {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <p> Поймано покемонов {count} /20 </p>
      <button
        onClick={magnificationСounter}>
        +1</button>
      <button
        onClick={reductionCounter}>
        -1</button>
      {pokemons.map(pokemon => (
        <Pokemon
          id={pokemon.id}
          name={pokemon.name}
          funMagnificationСounter={magnificationСounter}
          funReductionCounter={reductionCounter}
        />
      ))}
    </div>
  );
}

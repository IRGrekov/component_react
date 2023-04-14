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

export function PokemonsList() {
  const [caughtPokemonsIds, setCaughtPokemonsIds] = useState(["10", "9", "1", "8"])


  function togglePokemonId(id) {
    if (!caughtPokemonsIds.includes(id)) {
      const newArrPokemons = [...caughtPokemonsIds, id];
      setCaughtPokemonsIds(newArrPokemons)
    }
    else {
      // const newArrPokemons2 = [...caughtPokemonsIds];
      // const idIndex = newArrPokemons2.indexOf(id)
      // newArrPokemons2.splice(idIndex, 1)

      const newArr = caughtPokemonsIds.filter((el) => el !== id)
      setCaughtPokemonsIds(newArr)
    }
  }

  return (
    <div>
      <p> Поймано покемонов {caughtPokemonsIds.length}/20 </p>
      {/* <button onClick={() => togglePokemonId("5")}>
        Поймать покемона номер 5
      </button>
      <button onClick={() => togglePokemonId("7")}>
        Поймать покемона номер 7
      </button> */}
      {/* <button
        onClick={magnificationСounter}>
        +1</button>
      <button
        onClick={reductionCounter}>
        -1</button> */}
      <div className="wrapper">
        {pokemons.map(pokemon => (
          <Pokemon
            caught={caughtPokemonsIds.includes(pokemon.id)}
            id={pokemon.id}
            name={pokemon.name}
            catchFun={togglePokemonId}


          />
        ))}
      </div>
    </div>
  );
}

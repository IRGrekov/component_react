
import { regions } from "./Regions";
import { useState } from "react";


export function RegionSelector(props) {

  const [regionNow, setRegionNow] = useState(null)
  const [pressedInput, setPressedInput] = useState("")

  console.log("1", regionNow)
  console.log("2", pressedInput)
  // const ckick = (el) => {
  //   console.log("[f[f[f")
  //   if (!pressedInput) {
  //     style = {
  //       backgroundColor: .... ? "red" : "green",
  //     }
  //   } else {
  //     setPressedInput((el) => !pressedInput)
  //   }
  // }

  const handleClick = (code) => {
    setRegionNow(code)
    setPressedInput("")
  }

  function inputTextNow(event) {
    // console.log("event", event)
    setPressedInput(event.target.value)
  }

  let arrNeedfulReg = []
  for (let el of regions) {
    if (el.name.includes(pressedInput))
      arrNeedfulReg.push(el)
  }
  console.log("arrNeedfulReg", arrNeedfulReg)
  // let codeReionMow = undefined;
  // for (let el of regions) {
  //   if (el.code === regionNow) {
  //     codeReionMow = el
  //   }
  // }
  let codeReionMow = regions.find((el) => el.code === regionNow)

  // console.log(codeReionMow === undefined ? "Регион не выбран" : codeReionMow.name)

  return (
    <div>
      <p>{pressedInput}</p>
      <p>Текущий регион <b>{codeReionMow === undefined ? "Регион не выбран" : codeReionMow.name}</b>
      </p>
      <input
        value={pressedInput}
        className="fiend_region"
        type="text"
        placeholder={codeReionMow === undefined ? "Поиск" : codeReionMow.name}
        // onClick={() => ckick(pressedInput)}
        onChange={inputTextNow}
      >
      </input>
      <ul className="all_reg">
        {arrNeedfulReg.map((region) => {
          return (
            <li
              className="list_regions"
              autocomplete="off"
              key={region.code}
              onClick={() => handleClick(region.code)}
            >
              {region.name}({region.code})

            </li>
          );
        })}
      </ul>
    </div >
  )
}



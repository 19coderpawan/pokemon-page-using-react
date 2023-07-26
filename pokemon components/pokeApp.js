import React, { useState } from 'react'
import './pokestyle.css'
import Pokecards from './pokecards'
import Poke from './pokemonApi'
import Pokenav from './pokenav'

const uniquetype = [...new Set(Poke.map((currelement) => {
  return currelement.type;
})), "All"]
console.log("type is", uniquetype)

const PokeApp = () => {
  const [pokecurr, setpoke] = useState(Poke)
  const [uniquecurr, setuinque] = useState(uniquetype)
  console.log(pokecurr)
  const filterpokeitem = (type) => {

    if (type === "All") {
      setpoke(Poke);
      return;
    }
    const updatelist = Poke.filter((curr) => {
      return curr.type === type;
    })
    setpoke(updatelist);
  }
  return (
    <>
      <Pokenav uniquecurr={uniquecurr} filterpokeitem={filterpokeitem} />
      <Pokecards pokecurr={pokecurr} />
    </>
  )
}

export default PokeApp




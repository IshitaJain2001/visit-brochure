import React, { useState } from 'react'

export default function Tour({name,id,info,img,price,removeTour}) {
    const [readmore,Setreadmore] = useState(false)
    
    const desc= info.substring(1,200)
    function readingmore() {
        Setreadmore(true)
    }
    function showingless() {
Setreadmore(false)
    }
 
  return (
    <>
    <img src={img} alt={name} />
    <p>{name}</p>
    <p>{price}</p>
    {
      !readmore?   <p>{desc}...
      <button onClick={readingmore}>read more</button>
  </p>
      : <p> {info}
      <button onClick={showingless}>show less</button>
      </p>

    }
 <button onClick={()=>removeTour(id)}>Not interested</button>
    </>
  )
}


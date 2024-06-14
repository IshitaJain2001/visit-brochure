import React,{useState} from 'react'
import Tour from './Tour'
import Data from './Dataa'
export default function Cards() {
  const [values,setValues] = useState(Data)
  function removeTour(id) {
    const newValues = values.filter(tour => tour.id !== id);
    setValues(newValues);
  }
  function refresh() {
    setValues(Data)
  }
  return (
    <>


    {
      values.length>0?
      values.map((tourr)=>{
        return (
                <Tour values={values}  name={tourr.name} id={tourr.id} img={tourr.image} info={tourr.info} price={tourr.price} removeTour={removeTour}/>
        )
      })
      :
      <p>no tours to show</p>
    }
<button onClick={refresh}>Refresh</button>
    </>
  )
}


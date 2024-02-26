import React from 'react'
import { hero } from "../../assets/data/data"
const Card = () => {
  // console.log(hero)
  return (
    <>
      <div className='cards container'>
        { hero.map((item) => {
          return (
            <div className='card' key={ item.id }>
              <div className='left'>
                <img src={ item.cover } alt={ item.name } />
              </div>
              <div className='right'>
                <h4>{ item.name }</h4>
                <p>{item.items}{item.items==="1"?"  item":"  items"}</p>
              </div>
            </div>
          )
        }) }
      </div>
    </>
  )
}

export default Card
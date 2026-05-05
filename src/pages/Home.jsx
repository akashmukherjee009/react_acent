import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import mount from '../assets/221.jpg'
const product= [
  {
    name: 'Apple',
    price: 500
  },
  {
    name: "banana",
    price: 250
  },
  {
    name: 'orange',
    price: 350
  }
]
const Home = () => {

  const [data, setData]= useState(0)
  // let age=10
  let age=54
  return (
    <div>
      <img src={mount} alt="Company Logo" />
      {
        product.map(x=>(
          <Card name={x.name} price={x.price} />
        ))
      }
     <p>Hello</p>
    </div>
  )
}

export default Home

import React, { useEffect } from 'react'
import "./index.scss"
import { useProductContext } from '../../context/ProductContext'
import { IProduct } from '../../types'
import HomeCard from './HomeCard'

export default function Home() {
    const {data,readProduct} = useProductContext()

    useEffect(() => {
readProduct()
    },[])
  return (
    <div id='home'>
        <div className="container">
            <div className="home">
{
    data.map((el:IProduct,idx:number) => (
        <HomeCard el={el} key={idx}/>
    ))
}
            </div>
        </div>
    </div>
  )
}

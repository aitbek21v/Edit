import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '../types';

const productContext = createContext<any | undefined>(undefined)

export const useProductContext = () => useContext(productContext)

export default function ProductContext({children}:any) {
  let API = "http://localhost:3000/data";

  const [data,setData] = useState<IProduct[]>([])
const [onProduct , setOnProduct] = useState<object>({})
  async function addProduct (newProduct:object) {
    await axios.post(API,newProduct)
  }
  async function readProduct () {
    const {data} = await axios(API)
    setData(data)
  }
  async function deleteProduct (id:any) {
    await axios.delete(`${API}/${id}`)
    readProduct()
  }


  async function getProducts(id:any) {
    const {data} = await axios(`${API}/${id}`)
    setOnProduct(data)
  }

async function editProduct(id:number, editedProduct: object) {
    await axios.patch(`${API}/${id}`, editedProduct)
}
    const values = {
        addProduct,
        readProduct,
        data,
        deleteProduct,
        getProducts,
        onProduct,
        editProduct
    }
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  )
}

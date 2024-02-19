import React, { useState } from 'react'
import "./index.scss"
import { useProductContext } from '../../context/ProductContext'

export default function Admin() {
    const {addProduct} = useProductContext()
    const [inputValue,setInputValue] = useState<object>({
        name:"",
        price:"",
        image:""
    })
    function handleClick () {
        addProduct(inputValue)
    }
  return (
    <div id='admin'>
        <div className="container">
            <div className="admin">
                <div className="admin-inputs">
                    <input onChange={(e:any) => setInputValue({...inputValue,name:e.target.value})} type="text"  placeholder='name'/>
                    <input onChange={(e:any) => setInputValue({...inputValue,price:e.target.value})} type="text"  placeholder='price'/>
                    <input onChange={(e:any) => setInputValue({...inputValue,image:e.target.value})} type="text"  placeholder='url'/>
                    <button onClick={handleClick}>create</button>
                </div>
            </div>
        </div>
    </div>
  )
}

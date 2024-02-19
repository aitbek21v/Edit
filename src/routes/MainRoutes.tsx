import React from 'react'
import Home from '../page/Home'
import Admin from '../page/Admin'
import { Route, Routes } from 'react-router-dom'
import { IRoutes } from '../types'
import Edit from '../page/Edit'

export default function MainRoutes() {

    const PUBLIC:IRoutes[] = [
        {link:'/',element:<Home/>,id:1},
        {link:'/admin',element:<Admin/>,id:2},
        {link:'/edit/:id',element:<Edit/>,id:3},


    ]

  return (
    <Routes>
{
    PUBLIC.map((el:any) => (
        <Route path={el.link} element={el.element} key={el.id}/>
    ))
}
    </Routes>
  )
}

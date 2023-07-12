import React from 'react'
import ReactPoster from './ReactPoster'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
 <>
 <ReactPoster/>
 <Outlet/>
 </>
  )
}

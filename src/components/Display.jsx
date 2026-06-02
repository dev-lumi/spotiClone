import React from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
  return (
    <div className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome></DisplayHome>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum></DisplayAlbum>}></Route>
        </Routes>
    </div>
  )
}

export default Display
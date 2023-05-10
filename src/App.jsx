import React from 'react'
import { SocialNetworks } from './components/socialNetworks/SocialNetworks'
import { NavBar } from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { Counter } from './components/counter/Counter'
import { Home } from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/notfound/NotFound'

export const App = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='social-networks' element={<SocialNetworks/>}/>
          <Route path='counter1' element={<Counter initialValue={0} increment={5} decrement={5}/>}/>
          <Route path='counter2' element={<Counter initialValue={100} increment={5}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

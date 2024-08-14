import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Courses from './Components/Courses/Courses'
import CourseBundles from './Components/CourseBundles/CourseBundles'
import Internships from './Components/Internships/Internships'
import Phone from './Components/Phone/Phone.jsx'
import Invest from './Components/invest/Invest.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <div className=" ">
    <div className="image">
    <Header/>
    <Hero/>
    </div>
    <Courses/>
    <CourseBundles/>
    <Internships/>
    <Phone/>
    <Invest/>
    <Footer/>
    </div>
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import HomePage from './pages/Homepage'
import './App.css'

const LoadingScreen = () => {
  const [color, setColor] = useState('white')

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('#ff3c78') // original premium color (example)
    }, 1500) // delay before color change

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="loadingScreen">
      <h1 className="loadingLogo" style={{ color: color }}>
        Decorza
      </h1>
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // total loading screen duration

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogue" element={<div>Catalogue Page - To be implemented</div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

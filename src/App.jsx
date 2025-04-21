import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute('href')?.slice(1)
      if (targetId) {
        event.preventDefault()
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener('click', handleSmoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleSmoothScroll))
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Content />
      </main>
      <Footer />
    </div>
  )
}

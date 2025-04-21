import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import HamburgerMenu from '../assets/HamburgerMenuLight.svg'
import Cross from '../assets/CrossLight.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (id) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }) // Smooth scroll ke elemen target
      window.location.hash = id // Ganti hash di URL
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <button
          onClick={() => handleNavigation('#home')}
          className="flex items-center hover:text-gradient-logo hover:underline-gradient-logo transition duration-300 focus:outline-none"
        >
          <img src={Logo} alt="Netlab Logo" className="h-11 mr-4" />
          <h1 className="text-xl font-bold">Network Laboratory</h1>
        </button>
      </div>

      {/* Navbar Links */}
      <nav className="hidden lg:flex space-x-6 items-center">
        <button
          onClick={() => handleNavigation('#sbd')}
          className="hover:text-gradient-sbd hover:underline-gradient transition duration-300 font-bold focus:outline-none"
        >
          Sistem Basis Data
        </button>
        <button
          onClick={() => handleNavigation('#dmj')}
          className="hover:text-gradient-dmj hover:underline-gradient transition duration-300 font-bold focus:outline-none"
        >
          Desain dan Manajemen Jaringan
        </button>
        <button
          onClick={() => handleNavigation('#os')}
          className="hover:text-gradient-os hover:underline-gradient transition duration-300 font-bold focus:outline-none"
        >
          Sistem Operasi
        </button>
      </nav>

      {/* Hamburger Menu */}
      <button onClick={toggleMenu} className="focus:outline-none lg:hidden">
        <img src={isMenuOpen ? Cross : HamburgerMenu} alt="Menu Icon" className="h-8" />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-gray-950 text-white rounded shadow-lg overflow-hidden transition-all duration-300">
          <button
            onClick={() => {
              handleNavigation('#sbd')
              toggleMenu()
            }}
            className="block px-6 py-3 text-lg font-bold hover:text-gradient-sbd hover:underline-gradient transition duration-300 focus:outline-none"
          >
            Sistem Basis Data
          </button>
          <button
            onClick={() => {
              handleNavigation('#dmj')
              toggleMenu()
            }}
            className="block px-6 py-3 text-lg font-bold hover:text-gradient-dmj hover:underline-gradient transition duration-300 focus:outline-none"
          >
            Desain dan Manajemen Jaringan
          </button>
          <button
            onClick={() => {
              handleNavigation('#os')
              toggleMenu()
            }}
            className="block px-6 py-3 text-lg font-bold hover:text-gradient-os hover:underline-gradient transition duration-300 focus:outline-none"
          >
            Sistem Operasi
          </button>
        </div>
      )}
    </header>
  )
}
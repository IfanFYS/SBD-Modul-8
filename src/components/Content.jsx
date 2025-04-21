import { useState, useEffect } from 'react'
import SBDLogo from '../assets/SBDLogo.svg'
import DMJLogo from '../assets/DMJLogo.svg'
import OSLogo from '../assets/OSLogo.svg'
import Logo from '../assets/Logo.svg'

export default function Content() {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentPage, setCurrentPage] = useState('home') // Track halaman saat ini
  const texts = {
    home: ['Welcome to Network Laboratory!', 'Website by Fathan Yazid Satriani <3'],
    sbd: ['Sistem Basis Data', 'Database Systems'],
    dmj: ['Desain dan Manajemen Jaringan', 'Design and Management of Networks'],
    os: ['Sistem Operasi', 'Operating Systems'],
  }
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Reset typewriter state when currentPage changes
  useEffect(() => {
    setIndex(0)
    setCharIndex(0)
    setIsDeleting(false)
    setTypewriterText('') // Clear the text immediately
  }, [currentPage])

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[currentPage][index].length) {
        setCharIndex((prev) => prev + 1)
        setTypewriterText(texts[currentPage][index].slice(0, charIndex + 1))
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1)
        setTypewriterText(texts[currentPage][index].slice(0, charIndex - 1))
      } else if (!isDeleting && charIndex === texts[currentPage][index].length) {
        setIsDeleting(true)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % texts[currentPage].length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, texts, currentPage])

  // Handle navigation to sections
  const handleNavigation = (id) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }) // Smooth scroll ke elemen target
      setCurrentPage(id.slice(1)) // Update currentPage state
    }
  }

  return (
    <div className="h-screen overflow-y-scroll">
      {/* Section Home */}
      <section
        id="home"
        className="snap-start flex flex-col justify-center items-center bg-gray-950 text-white h-screen"
        onMouseEnter={() => setCurrentPage('home')}
      >
        <img
          src={Logo}
          alt="Main Logo"
          className="h-60 mb-3 logo-hover"
          onClick={() => handleNavigation('#home')} // Navigasi ke Home
        />
        <h1 className="text-center text-4xl font-bold mb-6">
          {typewriterText}
          <span className="blinking-cursor">|</span>
        </h1>
        <p className="text-center max-w-2xl mb-4">
          Selamat datang di website Network Laboratory! Website ini dibuat oleh Fathan Yazid Satriani sebagai bagian dari Tugas Pendahuluan Modul 8 dari Praktikum Sistem Basis Data (Frontend). Website ini berisi informasi mengenai beberapa mata kuliah Teknik Komputer UI pada semester 4 yang praktikumnya diwadahi oleh Netlab, yaitu Sistem Basis Data, Desain dan Manajemen Jaringan, dan Sistem Operasi.
        </p>
        <a href="#sbd" className="mt-8 text-blue-500 hover:underline">
          Scroll to see more ↓
        </a>
      </section>

      {/* Section SBD */}
      <section
        id="sbd"
        className="snap-start flex flex-col justify-center items-center bg-gray-900 text-white h-screen"
        onMouseEnter={() => setCurrentPage('sbd')}
      >
        {/* Logo */}
        <img
          src={SBDLogo}
          alt="SBD Logo"
          className="h-40 logo-hover mb-4"
          onClick={() => handleNavigation('#sbd')} // Navigasi ke SBD
        />

        {/* Judul */}
        <h2 className="text-center text-4xl sm:text-2xl font-bold mb-6">
          {typewriterText}
          <span className="blinking-cursor">|</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 max-w-5xl">
          {/* Teks Box */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full">
            {/* Keterangan */}
            <div className="bg-gray-950 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Keterangan</h3>
              <p className="mb-2 text-lg sm:text-sm">Kode MK: ENCE604016</p>
              <p className="mb-2 text-lg sm:text-sm">Semester: 4</p>
              <p className="mb-2 text-lg sm:text-sm">Jumlah SKS: 3 SKS</p>
              <p className="mb-2 text-lg sm:text-sm">Dosen Pengampu:</p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>I Gde Dharma Nugraha, S.T., M.T., Ph.D.</li>
                <li>Yan Maraden, S.T., M.T.</li>
              </ul>
            </div>

            {/* Komponen Penilaian */}
            <div className="bg-gray-950 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Komponen Penilaian</h3>
              <p className="mb-2 text-lg sm:text-sm">
                Praktikum ini terdiri dari beberapa bagian per modul. Bobot penilaian modul pada umumnya memiliki komponen sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>[15%] Tugas Pendahuluan</li>
                <li>[10%] Pre-Test</li>
                <li>[50%] Case Study</li>
                <li>[25%] Tugas Tambahan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section DMJ */}
      <section
        id="dmj"
        className="snap-start flex flex-col justify-center items-center bg-gray-800 text-white h-screen"
        onMouseEnter={() => setCurrentPage('dmj')}
      >
        {/* Logo */}
        <img
          src={DMJLogo}
          alt="DMJ Logo"
          className="h-40 logo-hover mb-4"
          onClick={() => handleNavigation('#dmj')} // Navigasi ke DMJ
        />

        {/* Judul */}
        <h2 className="text-center text-4xl sm:text-2xl font-bold mb-6">
          {typewriterText}
          <span className="blinking-cursor">|</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 max-w-5xl">
          {/* Teks Box */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full">
            {/* Keterangan */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Keterangan</h3>
              <p className="mb-2 text-lg sm:text-sm">Kode MK: ENCE604014</p>
              <p className="mb-2 text-lg sm:text-sm">Semester: 4</p>
              <p className="mb-2 text-lg sm:text-sm">Jumlah SKS: 3 SKS</p>
              <p className="mb-2 text-lg sm:text-sm">Dosen Pengampu:</p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>Diyanatul Husna, M.T.</li>
                <li>Elvian Syafrurizal, M.T.</li>
              </ul>
            </div>

            {/* Komponen Penilaian */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Komponen Penilaian</h3>
              <p className="mb-2 text-lg sm:text-sm">
                Praktikum ini terdiri dari beberapa bagian per modul. Bobot penilaian modul pada umumnya memiliki komponen sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>[20%] Tugas Pendahuluan</li>
                <li>[10%] Kuis Pendahuluan</li>
                <li>[40%] Case Study</li>
                <li>[30%] Tugas Tambahan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section OS */}
      <section
        id="os"
        className="snap-start flex flex-col justify-center items-center bg-gray-700 text-white h-screen"
        onMouseEnter={() => setCurrentPage('os')}
      >
        {/* Logo */}
        <img
          src={OSLogo}
          alt="OS Logo"
          className="h-40 logo-hover mb-4"
          onClick={() => handleNavigation('#os')} // Navigasi ke OS
        />

        {/* Judul */}
        <h2 className="text-center text-4xl sm:text-2xl font-bold mb-6">
          {typewriterText}
          <span className="blinking-cursor">|</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 max-w-5xl">
          {/* Teks Box */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full">
            {/* Keterangan */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Keterangan</h3>
              <p className="mb-2 text-lg sm:text-sm">Kode MK: ENCE604018</p>
              <p className="mb-2 text-lg sm:text-sm">Semester: 4</p>
              <p className="mb-2 text-lg sm:text-sm">Jumlah SKS: 3 SKS</p>
              <p className="mb-2 text-lg sm:text-sm">Dosen Pengampu:</p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>I Gde Dharma Nugraha, S.T., M.T., Ph.D.</li>
                <li>Yan Maraden, S.T., M.T.</li>
              </ul>
            </div>

            {/* Komponen Penilaian */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2 text-left">
              <h3 className="text-2xl sm:text-xl font-semibold mb-4">Komponen Penilaian</h3>
              <p className="mb-2 text-lg sm:text-sm">
                Praktikum ini terdiri dari beberapa bagian per modul. Bobot penilaian modul pada umumnya memiliki komponen sebagai berikut:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-sm">
                <li>[20%] Tugas Pendahuluan</li>
                <li>[50%] Case Study</li>
                <li>[30%] Tugas Tambahan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
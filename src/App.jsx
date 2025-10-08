// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import './styles/neonTheme.css'


export default function App() {
  return (
    <div className="antialiased text-slate-100 bg-neutral-900 min-h-screen scroll-smooth">
      <Navbar />
      <main className="pt-20"> {/* adds top padding for fixed navbar */}
        <section id="about">
          <Hero />
        </section>
         <neonTheme />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" className="py-32 text-center">
          <h2 className="text-3xl font-semibold text-white">Contact Section</h2>
          <p className="text-gray-400 mt-3">Soon to be filled with your cool info 😎</p>
        </section>
      </main>
    </div>
  )
}

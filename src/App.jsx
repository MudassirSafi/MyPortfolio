// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import './styles/neonTheme.css'
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from './components/Contact'


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
        <Experience />
        <Skills />
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

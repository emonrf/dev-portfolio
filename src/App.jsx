import React, { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Timeline from './components/Timeline'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  // Set a default value for theme state to avoid null
  const [theme, setTheme] = useState('light')

  // Initial theme based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      console.log('Set initial theme to dark');
    } else {
      setTheme('light');
      console.log('Set initial theme to light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Apply theme class to document
  useEffect(() => {
    console.log('Theme effect running with theme:', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class');
    }
  }, [theme]);

  return (
    <>
    <div className="bg-white dark:bg-stone-900 min-h-screen w-full">
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter max-w-5xl mx-auto">
        <Navbar theme={theme} toggleTheme={handleThemeSwitch} />
        
        <main className="container mx-auto pt-16 px-4">
          <section id="about">
            <Intro />
          </section>
          
          <section id="projects">
            <Portfolio />
          </section>
          
          <section id="timeline">
            <Timeline />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
      </div>
    </>
  )
}

export default App
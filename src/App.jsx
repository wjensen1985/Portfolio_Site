import Navbar from './sections/Navbar/Navbar';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Portfolio from './sections/Portfolio/Portfolio';
import FloatingNav from './sections/FloatingNav/FloatingNav';
import { createContext } from 'react';
import { useState } from 'react';


export const ThemeContext = createContext(null);

const App = () => {
  // theme switcher
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    console.log("theme change");
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main id={theme}>
          <Navbar toggleTheme = {toggleTheme}/>
          <Header />
          <Portfolio />
          <About />
          <Contact />
          <FloatingNav />
          <Footer />
      </main>
    </ThemeContext.Provider>
  )
}

export default App
import { useState,useEffect } from "react"
import About from "./components/About"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import Preloader from "./components/Preloader"
import "./styles/App.css"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <div className={`app-wrapper ${fadeIn ? "fade-in" : ""}`}>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
import { useEffect, useState } from "react"
import "../styles/navbar.css"
import menubar from "../assets/burger-bar.png"
const Navbar = () => {

  const [showContent, setShowContent] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  useEffect(() => {
    setShowContent(true);
  }, [])
  return (
    <div className={`nav-main ${showContent ? "fade-in " : ""}`}>
      <div className="logo">
        <p>portfolio</p>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
          <img src={menubar} alt="menubar" onClick={toggleSidebar} />
        </ul>

        {sidebarOpen && (
          <div className="sidebar">
            <a href="#home" onClick={toggleSidebar}>Home</a>
            <a href="#about" onClick={toggleSidebar}>About</a>
            <a href="#skills" onClick={toggleSidebar}>Skills</a>
            <a href="#projects" onClick={toggleSidebar}>Projects</a>
            <a href="#contact" onClick={toggleSidebar}>Contact</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
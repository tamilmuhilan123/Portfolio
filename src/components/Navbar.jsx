import { useEffect, useState } from "react"
import "../styles/navbar.css"
import menubar from "../assets/burger-bar.png"
const Navbar = () => {

  const [showContent,setShowContent]=useState(false);

  useEffect(()=>{
    setShowContent(true);
  },[])  
  return (
    <div className={`nav-main ${showContent ? "fade-in ":""}`}>
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
                <img src={menubar} alt="menubar" />
            </ul>
        </div>
    </div>
  )
}

export default Navbar
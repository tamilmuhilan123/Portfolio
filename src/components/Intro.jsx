import { useState,useEffect } from "react";
import profileimg from "../assets/profile.jpg"
import "../styles/intro.css"
import gitimg from "../assets/github.png"
import instaimg from "../assets/instagram.png"
import linkimg from "../assets/linkedin.png"
import mailimg from "../assets/mail.png"
const Intro = () => {

    const roles = ["MERN Stack Developer !", "Frontend Developer !","Backend Developer !","Freelancer !"];
    const Typewriter = ({ words, speed = 100, delay = 1500 }) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typeSpeed = deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting && charIndex === currentWord.length ? delay : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, delay]);

  return <font>{text}</font>;
};

    const [showContent,setShowContent]=useState(false);
      useEffect(()=>{
        setShowContent(true);
      },[]) 
  return (
    <div className={`intro-main ${showContent ? "fade-in":""}`} id="home">
        <div className={`intro-first-child ${showContent ? "fade-in":""}`}>
            <div className="image-container">
                <img src={profileimg} alt="profileimage" />
            </div>
        </div>
        <div className={`intro-second-child ${showContent ? "fade-in":""}`}>
            <div className="intro-para-container">
                <p className="intro-para-container-firstline">Hi👋I'm</p>
                <p className="main-name">Tamil muhilan...</p>
                <p className="intro-main-words">I'm a passionate <Typewriter words={roles} /></p>
                <p className="intro-main-words">A strong desire to create attrative websites and push the boundaries of technology.With a deep love for coding, <span> I am constantly seeking opportunities to learn and grow in this ever-evolving field.</span> <br />Explore my portfolio to see some of my experience.</p>
                <div className="intro-second-child-button">
                <div className="button">
                    <button>Download Resume</button>
                </div>
                </div>
                <div className="social-media">
                  <div className="social-media-main">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvrbwXfbFbGVsDHqMgvRxCkgjKNdSrpzblQsKWCPZLnvKsRjdbKdnzNbpBqkvvrDfLCMHL"><img src={mailimg} alt="mailimage" /></a>
                    <a href="https://www.linkedin.com/in/tamilmuhilan4/"><img src={linkimg} alt="linkedinimage" /></a>
                    <a href="https://github.com/tamilmuhilan123"><img src={gitimg} alt="githubimage" /></a>
                    <a href="https://www.instagram.com/tamil__016/"><img src={instaimg} alt="instagramimage" /></a>
                  </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Intro
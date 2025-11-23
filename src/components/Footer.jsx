import "../styles/footer.css"
import mailimg from "../assets/mail.png" 
import call from "../assets/phone-call.png"
import locationimg from "../assets/location.png"
const Footer = () => {
  return (
    <div className="footer-main" id="contact">
       <div className="footer-main-heading">
        <p>Get in touch 🤝</p>
       </div>
       <div className="footer-main-subheading">
        <p>let’s share thoughts, exchange ideas, and something meaningful together whether <br /> it’s a detailed project discussion or simply a friendly hello, I’m always open to connect.</p>
       </div>
       <div className="footer-left-right">
        <div className="footer-left">
        <div className="footer-left-heading">
          <p>Contact me</p>
        </div>
        <div className="footer-left-content">
          <p><img src={mailimg}/><p className="footer-left-content-para">developertamil04@gmail.com</p></p>
          <p><img src={call} alt="" /><p className="footer-left-content-para">+91 9952663264</p></p>
          <p><img src={locationimg} alt="" /><p className="footer-left-content-para">Erode,Tamilnadu,India</p></p>
        </div>
       </div>
       <div className="footer-right">
        <div className="footer-right-content">
          <p>Name:</p>
          <input type="text" placeholder="eg.,Tamil muhilan"/>
          <p>Email:</p>
          <input type="email" placeholder="eg.,developertamil04@gmail.com"/>
          <p>Message:</p>
          <input type="text" placeholder="Give your message" className="textbox"/>
          <div className="submitbutton">
          <button>Send message</button>
        </div>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Footer
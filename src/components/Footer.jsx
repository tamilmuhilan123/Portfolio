import { useState } from "react";
import "../styles/footer.css";
import mailimg from "../assets/mail.png";
import call from "../assets/phone-call.png";
import locationimg from "../assets/location.png";
import sendimg from "../assets/send.png"

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="footer-main" id="contact">
      <div className="footer-main-heading">
        <p>Get in touch 🤝</p>
      </div>

      <div className="footer-main-subheading">
        <p>
          let’s share thoughts, exchange ideas, and something meaningful together
          whether <br /> it’s a detailed project discussion or simply a friendly
          hello, I’m always open to connect.
        </p>
      </div>

      <div className="footer-left-right">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <div className="footer-left-heading">
            <p>Contact me</p>
          </div>

          <div className="footer-left-content">
            <div className="footer-row">
              <img src={mailimg} alt="mail" />
              <p className="footer-left-content-para">
                developertamil04@gmail.com
              </p>
            </div>

            <div className="footer-row">
              <img src={call} alt="call" />
              <p className="footer-left-content-para">
                +91 9952663264
              </p>
            </div>

            <div className="footer-row">
              <img src={locationimg} alt="location" />
              <p className="footer-left-content-para">
                Erode, Tamilnadu, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <div className="footer-right-content">
            <form onSubmit={handleSubmit}action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="ca1c2f0c-c83a-444a-8cbb-cb94e3def9ff"></input>
              <p>Name:</p>
              <input type="text"name="name"placeholder="eg., Tamil Muhilan"required value={form.name}onChange={handleChange}/>

              <p>Email:</p>
              <input
                type="email"
                name="email"
                placeholder="eg., developertamil04@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
              />

              <p>Message:</p>
              <input
                type="text"
                name="message"
                className="textbox"
                placeholder="Give your message"
                required
                value={form.message}
                onChange={handleChange}
              />

              <div className="submitbutton">
                <button type="submit"> <p>Send message </p><img src={sendimg}/></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

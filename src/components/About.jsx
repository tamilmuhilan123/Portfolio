import "../styles/about.css"
import calenderimg from "../assets/calendar.png"
const About = () => {
  return (
    <div className="about-main" id="about">
      <div className="about-main-firstchild">
        <div className="about-main-firstchild-heading">
          <p>About me 🙋‍♂️</p>
        </div>
        <div className="about-main-firstchild-content">
          <p>➡️ I am currently pursuing my final year Bachelor's Degree in Artificial Intelligence and Data Science.I have built a solid foundation in Web development, particularly in areas such as Frontend and Backend and Database. <br /></p>
          <p>➡️ My expertise in these areas allows me to approach projects with confidence and deliver high-quality results. <br /></p>
          <p>➡️ I actively seek out opportunities to expand my knowledge and skills, embracing new technologies and approaches.</p>
        </div>
      </div>
      <div className="about-main-secondchild">
        <div className="about-main-secondchild-heading">
          <p>Education 🎓</p>
        </div>
        <div className="about-main-secondchild-content">
          <div className="college">
            <p className="education-name">B.Tech AIDS</p>
            <p>Nandha Engineering College (Autonomous)</p>
            <p><img src={calenderimg}/> 2022-2026</p>
          </div>
          <div className="hsc">
            <p className="education-name">HSC</p>
            <p>Shree Gurukulam Hr Sec School</p>
            <p><img src={calenderimg}/> 2021-2022</p>
          </div>
          <div className="sslc">
            <p className="education-name">SSLC</p>
            <p>Shree Gurukulam Hr Sec School</p>
            <p><img src={calenderimg}/> 2019-2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
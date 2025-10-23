import "../styles/skills.css"
import skill from "../skill.json"
const Skills = () => {
  return (
    <div className='skill-main' id="skills">
      <div className="skill-heading">
        <p>What I Use to Build Stuff 👨🏼‍💻</p>
      </div>
      <p className="technology">Here are the powerful tools and technologies I use to bring your ideas to life. From front-end frameworks to <br /> back-end systems, I create seamless, scalable solutions tailored to your needs, delivering high-quality <br /> results with lasting impact.</p>
      <div className="skills-main-types">
        {/* <div className="skill-main-types-box">
          <p>HTML</p>
          <img src={htmlimg} alt="html image" />
        </div> */}
        {skill.map((item)=>{
          return(
            <div className="skill-main-types-box">
              <p>{item.name}</p>
              <img src={item.image}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
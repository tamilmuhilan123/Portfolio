import "../styles/projects.css"
const Projects = () => {
  return (
    <div className='project-main' id="projects">
      <div className="project-heading">
        <p>Where code meets creativity 🎨💻</p>
      </div>
      <p className="project-subheading">This is where i share the projects I've built combining innovation with clean,efficient code.Every <br /> project is an opportunity to push boundaries and create something meaningful</p>
        <div className="frontend-projects">
          <div className="frontend-projects-heading">
            <p>Frontend projects</p>
          </div>
        </div>
        {/* <div className="backend-projects">
          <div className="backend-projects-heading">
            <p>Backend projects</p>
          </div>
        </div> */}
        {/* <div className="fullmernstack-projects">
          <div className="fullmernstack-projects-heading">
            <p>Full MERN Stack projects</p>
          </div>
        </div> */}
    </div>
  )
}

export default Projects
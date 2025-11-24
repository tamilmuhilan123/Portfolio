// import "../styles/projects.css"
// import miniproject from "../miniprojects.json"
// import mainproject from "../majorprojects.json"
// import { useRef } from "react";

// const Projects = () => {
// 
//   return (
//     <div className='project-main' id="projects">
//       <div className="project-heading">
//         <p>Where code meets creativity 🎨💻</p>
//       </div>
//       <p className="project-subheading">This is where i share the projects I've built combining innovation with clean,efficient code.Every <br /> project is an opportunity to push boundaries and create something meaningful.</p>
//       <div className="mini-projects">
//         <div className="mini-projects-heading">
//           <p>Mini projects</p>
//         </div>
//         <div className="miniproject-projects">
//           {miniproject.map((items) => {
//             return (
//               <div className="project-cards">
//                 <div className="project-image">
//                   <img src={items.images} />
//                 </div>
//                 <div className="project-livedemo">
//                   <button className="onlinebtn">online</button>
//                   <button><a href={items.hostlink}>View project</a></button>
//                 </div>
//                 <div className="project-description">
//                   <p>{items.description}</p>
//                 </div>
//                 <hr />
//                 <div className="project-tech">
//                   <ul>
//                     {items["tech-used"].map((item,index)=>{
//                       return(
//                         <li key={index}><button>{item}</button></li>
//                       )
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <div className="main-projects">
//         <div className="main-projects-heading">
//           <p>Main projects</p>
//         </div>
//         <div className="miniproject-projects">
//           {mainproject.map((items) => {
//             return (
//               <div className="main-project-cards">
//                 <div className="main-project-image">
//                   <img src={items.images} />
//                 </div>
//                 <div className="project-livedemo">
//                   <button className="onlinebtn">online</button>
//                   <button><a href={items.hostlink}>View project</a></button>
//                 </div>
//                 <div className="project-description">
//                   <p>{items.description}</p>
//                 </div>
//                 <hr />
//                 <div className="project-tech">
//                   <ul>
//                     {items["tech-used"].map((item,index)=>{
//                       return(
//                         <li key={index}><button>{item}</button></li>
//                       )
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Projects






import "../styles/projects.css"
import miniproject from "../miniprojects.json"
import mainproject from "../majorprojects.json"
import { useRef } from "react";

const Projects = () => {

  const miniRef = useRef(null);
  const mainRef = useRef(null);

  const slideRight = (ref) => {
    ref.current.scrollLeft += 350; // move right
  };

  const slideLeft = (ref) => {
    ref.current.scrollLeft -= 350; // move left
  };

  return (
    <div className='project-main' id="projects">
      <div className="project-heading">
         <p>Where code meets creativity 🎨💻</p>
       </div>
      <p className="project-subheading">This is where i share the projects I've built combining innovation with clean,efficient code.Every <br /> project is an opportunity to push boundaries and create something meaningful.</p>

    
      <div className="mini-projects">
        <div className="mini-projects-heading">
          <p>Mini projects</p>
        </div>
        <div className="miniproject-projects" ref={miniRef}>
          {miniproject.map((items) => (
            <div className="project-cards">
              <div className="project-image">
                <img src={items.images} />
              </div>
              <div className="project-livedemo">
                <button className="onlinebtn">online</button>
                <button><a href={items.hostlink}>View project</a></button>
              </div>
              <div className="project-description">
                <p>{items.description}</p>
              </div>
              <hr />
              <div className="project-tech">
                <ul>
                  {items["tech-used"].map((item, index) => (
                    <li key={index}><button>{item}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
         <div className="slider-btns">
          <button onClick={() => slideLeft(miniRef)}>⟵</button>
          <button onClick={() => slideRight(miniRef)}>⟶</button>
        </div>

      </div>

      {/* --- Main Projects --- */}
      <div className="main-projects">
        <div className="main-projects-heading">
          <p>Main projects</p>
        </div>
        <div className="miniproject-projects" ref={mainRef}>
          {mainproject.map((items) => (
            <div className="main-project-cards">
              <div className="main-project-image">
                <img src={items.images} />
              </div>
              <div className="project-livedemo">
                <button className="onlinebtn">online</button>
                <button><a href={items.hostlink}>View project</a></button>
              </div>
              <div className="project-description">
                <p>{items.description}</p>
              </div>
              <hr />
              <div className="project-tech">
                <ul>
                  {items["tech-used"].map((item, index) => (
                    <li key={index}><button>{item}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
         <div className="slider-btns">
          <button onClick={() => slideLeft(mainRef)}>⟵</button>
          <button onClick={() => slideRight(mainRef)}>⟶</button>
        </div>

      </div>
    </div>
  )
}

export default Projects;

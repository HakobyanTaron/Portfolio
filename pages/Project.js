import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";

export default function Project() {
  const { id } = useParams();
  const project = projects[id];

  console.log(project)

  return (
    <div>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>

            {project.BtnGitHub && <BtnGitHub link="https://github.com/" />}

            
          </div>
        </div>
      </main>
    </div>
  );
}

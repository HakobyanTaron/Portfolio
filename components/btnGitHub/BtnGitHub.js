import gitHubIcon from "./gitHub-black.svg"
import "./style.css";

export default function BtnGitHub({link}) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={gitHubIcon} alt="" />
        GitHub repo
      </a>
    </div>
  );
}

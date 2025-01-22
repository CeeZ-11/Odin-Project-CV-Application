import Achievements from "./components/Editor/Achievements";
import Education from "./components/Editor/Education";
import Experience from "./components/Editor/Experience";
import Personal from "./components/Editor/Personal";
import Skills from "./components/Editor/Skills";
import "./styles/App.css";

export default function App() {
  return (
    <main>
      <div className="editor">
        <h1>Resume Editor</h1>
        <Personal />
        <Skills />
        <Achievements />
        <Education />
        <Experience />
      </div>
      <div className="resume">
        <h1>Resume</h1>
        <div className="resume-container">
          <div className="resume-head">Header Section</div>
          <div className="resume-body">
            <div className="aside">Aside Section</div>
            <div className="main">Main Section</div>
          </div>
          <div className="resume-foot">Footer Section</div>
        </div>
      </div>
    </main>
  );
}

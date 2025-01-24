import Achievements from "./components/Editor/Achievements";
import Education from "./components/Editor/Education";
import Experience from "./components/Editor/Experience";
import Personal from "./components/Editor/Personal";
import Skills from "./components/Editor/Skills";
import Head from "./components/Resume/Head";
import Main from "./components/Resume/Main";
import "./styles/App.css";
import phoneIcon from "./components/Resume/assets/phone.svg";
import emailIcon from "./components/Resume/assets/email.svg";
import websiteIcon from "./components/Resume/assets/web.svg";
import html2pdf from "html2pdf.js";
import { useState } from "react";

const personalList = [
  {
    fName: "James",
    lName: "Denver",
    occupation: "Frontend Developer",
    phone: "(+54) 9 2706 64116",
    email: "james@gmail.com",
    portfolio: "portfolio@example.com",
    address: "123 Main Street, City, Country",
    profile:
      "Motivated and detail-oriented professional with a passion for delivering high-quality work. Equipped with strong problem-solving skills, a commitment to continuous learning, and the ability to adapt to new challenges. Dedicated to achieving results through collaboration, efficiency, and innovation. Seeking an opportunity to contribute to organizational success while growing professionally.",
  },
];

const skillsSet = [
  { id: 0, name: "Attention to detail" },
  { id: 1, name: "Creative thinking" },
  { id: 2, name: "Teamwork" },
];

const achievementsList = [
  {
    id: 0,
    title: "Increased Website Traffic",
    description: "Optimized SEO strategies and improved content strategies.",
    result: "Increased website traffic by 40%.",
    date: "2023-01",
    end_date: "2023-03",
    display: true,
  },
  {
    id: 1,
    title: "Led Mobile App Development",
    description:
      "Managed the development and launch of a mobile app, coordinating with a team of developers.",
    result: "Achieved 50,000 downloads within the first 3 months.",
    date: "2023-03",
    end_date: "2023-05",
    display: true,
  },
];

const educationList = [
  {
    id: 0,
    school: "University of St. La Salle - Bacolod",
    degree: "BS Information Technology - Major in Web and Mobile Development",
    date: "2023-01",
    end_date: "2023-03",
    description:
      "Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
    display: true,
  },
];

const experienceList = [
  {
    id: 0,
    job_title: "Logistics Coordinator",
    employer: "Rulewave",
    employment_type: "Full-Time",
    date: "2023-01",
    end_date: "2023-03",
    location: "Houston, Texas, United States",
    work_arrangement: "Remote",
    description:
      "I have extensive experience in supply chain operations, data analysis, and logistics. As a DSC IBD Processor, I optimized processes, resolved shipping errors, and provided customer support. As a Data Analyst, I analyzed logistics data to ensure reliability and maintained databases. In Dropshipping, I managed shipments, resolved inventory issues, and ensured timely deliveries.",
    display: true,
  },
];

export default function App() {
  const [personal, setPersonal] = useState(personalList[0]);
  const [skills, setSkills] = useState(skillsSet);
  const [achievements, setAchievements] = useState(achievementsList);
  const [education, setEducation] = useState(educationList);
  const [experience, setExperience] = useState(experienceList);
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handlePersonalInputChange = (field, value) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      [field]: value,
    }));
  };

  const removeSkills = (id) => {
    const updatedSkills = skills
      .filter((skill) => skill.id !== id)
      .map((skill, index) => ({
        ...skill,
        id: index,
      }));
    setSkills(updatedSkills);
  };

  const addSkills = () => {
    setSkills([
      ...skills,
      {
        id: skills.length,
        name: "",
      },
    ]);
  };

  const handleSkillsInputChange = (id, value) => {
    const updatedSkills = skills.map((skill) => {
      if (skill.id === id)
        return {
          ...skill,
          name: value,
        };
      return skill;
    });

    setSkills(updatedSkills);
  };

  //Achievements

  const removeAchievements = (id) => {
    const updatedAchievements = achievements
      .filter((achievement) => achievement.id !== id)
      .map((achievement, index) => ({
        ...achievement,
        id: index,
      }));
    setAchievements(updatedAchievements);
  };

  const addAchievements = () => {
    setAchievements([
      ...achievements,
      {
        id: achievements.length,
        title: "",
        description: "",
        result: "",
        date: "",
        display: true,
      },
    ]);
  };

  const changeAchievementDisplay = (id) => {
    const updatedAchievements = achievements.map((achievement) => {
      if (achievement.id === id) {
        return {
          ...achievement,
          display: false,
        };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  const changeAchievementFormDisplay = (id) => {
    const updatedAchievements = achievements.map((achievement) => {
      if (achievement.id === id) {
        return {
          ...achievement,
          display: true,
        };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  const handleAchievementInputChange = (id, field, value) => {
    const updatedAchievements = achievements.map((achievement) => {
      if (achievement.id === id) {
        return {
          ...achievement,
          [field]: value,
        };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  //EDUCATION

  const removeEducation = (id) => {
    const updatedEducation = education
      .filter((educ) => educ.id !== id)
      .map((educ, index) => ({
        ...educ,
        id: index,
      }));
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: education.length,
        school: "",
        degree: "",
        city: "",
        date: "",
        end_date: "",
        description: "",
        display: true,
      },
    ]);
  };

  const changeEducationDisplay = (id) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...educ,
          display: false,
        };
      }
      return educ;
    });
    setEducation(updatedEducation);
  };

  const changeEducationFormDisplay = (id) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...educ,
          display: true,
        };
      }
      return educ;
    });
    setEducation(updatedEducation);
  };

  const handleEducInputChange = (id, field, value) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...educ,
          [field]: value,
        };
      }
      return educ;
    });
    setEducation(updatedEducation);
  };

  //EXPERIENCE
  const removeExperience = (id) => {
    const updatedExperience = experience
      .filter((exp) => exp.id !== id)
      .map((exp, index) => ({
        ...exp,
        id: index,
      }));
    setExperience(updatedExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: experience.length,
        job_title: "",
        employer: "",
        employment_type: "",
        date: "",
        end_date: "",
        location: "",
        work_arrangement: "",
        description: "",
        display: true,
      },
    ]);
  };

  const changeExperienceDisplay = (id) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          display: false,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  const changeExperienceFormDisplay = (id) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          display: true,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  const handleExpInputChange = (id, field, value) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          [field]: value,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  const handleDownloadPDF = () => {
    const element = document.querySelector(".resume-container");
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 10, useCORS: true, logging: true },
      jsPDF: { unit: "px", format: [550, 780], orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <main>
      <div className="editor">
        <h1>Resume Editor</h1>

        <Personal
          personal={personal}
          handlePersonalInputChange={handlePersonalInputChange}
          handleChange={handleChange}
        />
        <Skills
          skills={skills}
          removeSkills={removeSkills}
          addSkills={addSkills}
          handleSkillsInputChange={handleSkillsInputChange}
        />
        <Achievements
          achievements={achievements}
          removeAchievements={removeAchievements}
          addAchievements={addAchievements}
          changeAchievementDisplay={changeAchievementDisplay}
          changeAchievementFormDisplay={changeAchievementFormDisplay}
          handleAchievementInputChange={handleAchievementInputChange}
        />
        <Education
          education={education}
          removeEducation={removeEducation}
          addEducation={addEducation}
          changeEducationDisplay={changeEducationDisplay}
          changeEducationFormDisplay={changeEducationFormDisplay}
          handleEducInputChange={handleEducInputChange}
        />
        <Experience
          experience={experience}
          removeExperience={removeExperience}
          addExperience={addExperience}
          changeExperienceDisplay={changeExperienceDisplay}
          changeExperienceFormDisplay={changeExperienceFormDisplay}
          handleExpInputChange={handleExpInputChange}
        />
      </div>
      <div className="resume">
        <div className="resume-header-container">
          <h1>Resume</h1>
          <button className="pdf-btn" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>
        <div className="resume-container">
          <Head
            personal={personal}
            file={file}
            phoneIcon={phoneIcon}
            emailIcon={emailIcon}
            websiteIcon={websiteIcon}
          />
          <Main
            personal={personal}
            skills={skills}
            achievements={achievements}
            education={education}
            experience={experience}
          />
          <div className="resume-foot"></div>
        </div>
      </div>
    </main>
  );
}

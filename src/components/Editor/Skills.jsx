import { useState } from "react";

const skillsSet = [
  { id: 0, name: "Attention to detail" },
  { id: 1, name: "Creative thinking" },
  { id: 2, name: "Teamwork" },
];
export default function Skills() {
  const [skills, setSkills] = useState(skillsSet);

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

  return (
    <>
      <div className="titles skillsTitle">
        <h3>Skills</h3>{" "}
        <button type="button" onClick={addSkills}>
          +
        </button>
      </div>

      <hr className="grey-line" />
      <form className="skillsList">
        <ul className="skills-ul">
          {skills.map((skill, index) => (
            <div className="skills-container" key={skill.id}>
              <li>
                <input
                  type="text"
                  name="skills"
                  id={`skills ${skill.id}`}
                  pattern="^[^0-9]+$"
                  maxLength="25"
                  placeholder={skill.name}
                  required
                />
                <label htmlFor={`skills ${skill.id}`}>
                  {`Skills #${index + 1}`}
                </label>
                <button type="button" onClick={() => removeSkills(skill.id)}>
                  x
                </button>
              </li>
            </div>
          ))}
        </ul>
      </form>
    </>
  );
}

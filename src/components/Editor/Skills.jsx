export default function Skills({
  skills,
  removeSkills,
  addSkills,
  handleSkillsInputChange,
}) {
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
                  value={skill.name}
                  pattern="^[^0-9]+$"
                  maxLength="25"
                  placeholder={skill.name}
                  onChange={(e) =>
                    handleSkillsInputChange(skill.id, e.target.value)
                  }
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

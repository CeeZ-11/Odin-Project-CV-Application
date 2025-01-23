import DisplayExperience from "./DisplayExperience";

export default function Experience({
  experience,
  removeExperience,
  addExperience,
  changeExperienceDisplay,
  changeExperienceFormDisplay,
  handleExpInputChange,
}) {
  return (
    <>
      <div className="titles experience-title">
        <h3>Experience</h3>
        <button type="button" onClick={addExperience}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="experience-ul">
        {experience.map((exp) => (
          <div className="experience-container" key={exp.id}>
            <li className="experience-li">
              <DisplayExperience
                id={exp.id}
                job_title={exp.job_title}
                employer={exp.employer}
                employment_type={exp.employment_type}
                date={exp.date}
                end_date={exp.end_date}
                location={exp.location}
                work_arrangement={exp.work_arrangement}
                description={exp.description}
                display={exp.display}
                removeExperience={removeExperience}
                changeExperienceDisplay={changeExperienceDisplay}
                handleExpInputChange={handleExpInputChange}
                changeExperienceFormDisplay={changeExperienceFormDisplay}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

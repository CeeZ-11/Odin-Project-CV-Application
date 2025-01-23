import DisplayEducation from "./DisplayEducation";

export default function Education({
  education,
  removeEducation,
  addEducation,
  changeEducationDisplay,
  changeEducationFormDisplay,
  handleEducInputChange,
}) {
  return (
    <>
      <div className="titles education-title">
        <h3>Education</h3>
        <button type="button" onClick={addEducation}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="education-ul">
        {education.map((educ) => (
          <div className="education-container" key={educ.id}>
            <li className="education-li">
              <DisplayEducation
                id={educ.id}
                school={educ.school}
                degree={educ.degree}
                date={educ.date}
                end_date={educ.end_date}
                description={educ.description}
                display={educ.display}
                removeEducation={removeEducation}
                changeEducationDisplay={changeEducationDisplay}
                handleEducInputChange={handleEducInputChange}
                changeEducationFormDisplay={changeEducationFormDisplay}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

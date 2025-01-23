import "./Main.css";

export default function Main({
  personal,
  skills,
  achievements,
  education,
  experience,
}) {
  return (
    <div className="resume-body">
      <div className="aside">
        <h3>PROFILE</h3>
        <hr className="aside-grey-line" />
        <p>{personal.profile}</p>
        <h3>SKILLS</h3>
        <hr className="aside-grey-line" />
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
        <h3>ACHIEVEMENTS</h3>
        <hr className="aside-grey-line" />
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement.id}>
              {achievement.title}
              {achievement.description}
              {achievement.result} {"("}
              {achievement.date} {achievement.end_date}
              {")"}
            </li>
          ))}
        </ul>
      </div>
      <hr className="resume-grey-line" />
      <div className="main">
        <h3>EDUCATION</h3>
        <hr className="main-grey-line" />
        {education.map((educ) => (
          <div key={educ.id}>
            <h4>{educ.school}</h4>
            <h5>{educ.degree}</h5>
            <p>
              {educ.date} - {educ.end_date}
            </p>
            <ul>
              <li>{educ.description}</li>
            </ul>
          </div>
        ))}

        <h3>EXPERIENCE</h3>
        <hr className="main-grey-line" />

        {experience.map((exp) => (
          <div key={exp.id}>
            <h4>{exp.job_title}</h4>
            <h5>
              {exp.employer} - {exp.employment_type}
            </h5>
            <p>
              {exp.date} - {exp.end_date}
            </p>
            <p>
              {exp.location} - {exp.work_arrangement}
            </p>
            <ul>
              <li>{exp.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import DisplayExperienceForm from "./DisplayExperienceForm";

export default function DisplayExperience({
  id,
  job_title,
  employer,
  employment_type,
  date,
  end_date,
  location,
  work_arrangement,
  description,
  display,
  removeExperience,
  changeExperienceDisplay,
  handleExpInputChange,
  changeExperienceFormDisplay,
}) {
  return (
    <>
      {display && (
        <div className="experience-list">
          <h5>
            {job_title} at {employer}
          </h5>
          <p>
            {date} - {end_date}
          </p>
        </div>
      )}

      {!display && (
        <DisplayExperienceForm
          id={id}
          job_title={job_title}
          employer={employer}
          employment_type={employment_type}
          date={date}
          end_date={end_date}
          location={location}
          work_arrangement={work_arrangement}
          description={description}
          handleExpInputChange={handleExpInputChange}
          changeExperienceFormDisplay={changeExperienceFormDisplay}
        />
      )}

      <div className="experience-btn-div">
        <button
          type="button"
          onClick={() => changeExperienceDisplay(id)}
          className="experience-btn"
        >
          Edit
        </button>
        <button type="button" onClick={() => removeExperience(id)}>
          x
        </button>
      </div>
    </>
  );
}

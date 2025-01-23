import DisplayEducationForm from "./DisplayEducationForm";

export default function DisplayEducation({
  id,
  school,
  degree,
  date,
  end_date,
  description,
  display,
  removeEducation,
  changeEducationDisplay,
  handleEducInputChange,
  changeEducationFormDisplay,
}) {
  return (
    <>
      {display && (
        <div className="education-list">
          <h5>
            {degree} at {school}
          </h5>
          <p>
            {date} - {end_date}
          </p>
        </div>
      )}

      {!display && (
        <DisplayEducationForm
          id={id}
          school={school}
          degree={degree}
          date={date}
          end_date={end_date}
          description={description}
          handleEducInputChange={handleEducInputChange}
          changeEducationFormDisplay={changeEducationFormDisplay}
        />
      )}

      <div className="education-btn-div">
        <button
          type="button"
          onClick={() => changeEducationDisplay(id)}
          className="education-btn"
        >
          Edit
        </button>
        <button type="button" onClick={() => removeEducation(id)}>
          x
        </button>
      </div>
    </>
  );
}

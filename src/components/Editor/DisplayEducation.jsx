import DisplayEducationForm from "./DisplayEducationForm";

export default function DisplayEducation({
  id,
  school,
  degree,
  city,
  date,
  end_date,
  description,
  display,
  removeEducation,
  changeDisplay,
  handleInputChange,
  changeFormDisplay,
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
          city={city}
          date={date}
          end_date={end_date}
          description={description}
          handleInputChange={handleInputChange}
          changeFormDisplay={changeFormDisplay}
        />
      )}

      <div className="education-btn-div">
        <button
          type="button"
          onClick={() => changeDisplay(id)}
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

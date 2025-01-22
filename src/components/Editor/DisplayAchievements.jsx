import DisplayAchievementsForm from "./DisplayAchievementsForm";
export default function DisplayAchievements({
  id,
  title,
  description,
  result,
  date,
  end_date,
  display,
  removeAchievements,
  changeDisplay,
  handleInputChange,
  changeFormDisplay,
}) {
  return (
    <>
      {display && (
        <div className="achievement-list">
          <h5>{title}</h5>
          <p>
            {date} - {end_date}
          </p>
        </div>
      )}

      {!display && (
        <DisplayAchievementsForm
          id={id}
          title={title}
          description={description}
          result={result}
          date={date}
          end_date={end_date}
          handleInputChange={handleInputChange}
          changeFormDisplay={changeFormDisplay}
        />
      )}

      <div className="achievements-btn-div">
        <button
          type="button"
          onClick={() => changeDisplay(id)}
          className="achievements-btn"
        >
          Edit
        </button>
        <button type="button" onClick={() => removeAchievements(id)}>
          x
        </button>
      </div>
    </>
  );
}
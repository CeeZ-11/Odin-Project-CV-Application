import DisplayAchievementsForm from "./DisplayAchievementsForm";
export default function DisplayAchievements({
  id,
  title,
  description,
  result,
  date,
  display,
  removeAchievements,
  changeDisplay,
}) {
  return (
    <>
      {display && (
        <div className="achievement-list">
          <h5>{title}</h5>
          <p>{date}</p>
        </div>
      )}

      {!display && (
        <DisplayAchievementsForm
          title={title}
          description={description}
          result={result}
          date={date}
        />
      )}

      <div className="achievements-btn-div">
        <button type="button" onClick={() => changeDisplay(id)}>
          Edit
        </button>
        <button type="button" onClick={() => removeAchievements(id)}>
          x
        </button>
      </div>
    </>
  );
}

export default function DisplayAchievements(
  id,
  title,
  date,
  removeAchievements
) {
  return (
    <>
      <div className="achievement-list">
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
      <div className="achievements-btn-div">
        <button type="button">Edit</button>
        <button type="button" onClick={() => removeAchievements(id)}>
          x
        </button>
      </div>
    </>
  );
}

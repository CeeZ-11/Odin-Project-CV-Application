export default function DisplayAchievementsForm({
  title,
  description,
  result,
  date,
}) {
  return (
    <form className="personal-details">
      <div className="comment achivement-title">
        <input
          type="text"
          name="fName"
          id="fName"
          pattern="^[^0-9]+$"
          maxLength="25"
          value={title || null}
          required
        />
        <label htmlFor="fName">Title</label>
      </div>
      <div className="comment achivement-description">
        <input
          type="text"
          name="lName"
          id="lName"
          pattern="^[^0-9]+$"
          maxLength="25"
          value={description || null}
          required
        />
        <label htmlFor="lName">Description</label>
      </div>
      <div className="comment achivement-result">
        <input
          type="text"
          name="occupation"
          id="occupation"
          pattern="^[^0-9]+$"
          maxLength="25"
          value={result || null}
          required
        />
        <label htmlFor="occupation">Result</label>
      </div>
      <div className="comment achivement-date">
        <input type="date" name="date" id="date" value={date} required />
        <label htmlFor="date">Date</label>
      </div>
    </form>
  );
}

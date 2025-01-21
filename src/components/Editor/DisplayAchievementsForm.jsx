export default function DisplayAchievementsForm({
  id,
  title,
  description,
  result,
  date,
  end_date,
  handleInputChange,
}) {
  return (
    <>
      <form className="achievement-details">
        <div className="comment achievement-title">
          <input
            type="text"
            name="title"
            id="title"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={title || null}
            onChange={(e) => handleInputChange(id, "title", e.target.value)}
            required
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="comment achievement-description">
          <input
            type="text"
            name="description"
            id="description"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={description || null}
            onChange={(e) =>
              handleInputChange(id, "description", e.target.value)
            }
            required
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="comment achievement-result">
          <input
            type="text"
            name="result"
            id="result"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={result || null}
            onChange={(e) => handleInputChange(id, "result", e.target.value)}
            required
          />
          <label htmlFor="result">Result</label>
        </div>
        <div className="comment achievement-date">
          <input
            type="month"
            name="date"
            id="date"
            onChange={(e) => handleInputChange(id, "date", e.target.value)}
            value={date}
            required
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="comment achievement-endDate">
          <input
            type="month"
            name="endDate"
            id="endDate"
            onChange={(e) => handleInputChange(id, "end_date", e.target.value)}
            value={end_date}
            required
          />
          <label htmlFor="endDate">End Date</label>
        </div>
        <button type="button" className="achievements-btn">
          Cancel
        </button>
      </form>
    </>
  );
}

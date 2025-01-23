export default function DisplayAchievementsForm({
  id,
  title,
  description,
  result,
  date,
  end_date,
  handleAchievementInputChange,
  changeAchievementFormDisplay,
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
            value={title || ""}
            onChange={(e) =>
              handleAchievementInputChange(id, "title", e.target.value)
            }
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
            value={description || ""}
            onChange={(e) =>
              handleAchievementInputChange(id, "description", e.target.value)
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
            value={result || ""}
            onChange={(e) =>
              handleAchievementInputChange(id, "result", e.target.value)
            }
            required
          />
          <label htmlFor="result">Result</label>
        </div>
        <div className="comment achievement-date">
          <input
            type="month"
            name="date"
            id="date"
            onChange={(e) =>
              handleAchievementInputChange(id, "date", e.target.value)
            }
            value={date || ""}
            required
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="comment achievement-endDate">
          <input
            type="month"
            name="endDate"
            id="endDate"
            onChange={(e) =>
              handleAchievementInputChange(id, "end_date", e.target.value)
            }
            value={end_date || ""}
            required
          />
          <label htmlFor="endDate">End Date</label>
        </div>
        <button
          type="button"
          className="achievements-btn"
          onClick={() => changeAchievementFormDisplay(id)}
        >
          Close
        </button>
      </form>
    </>
  );
}

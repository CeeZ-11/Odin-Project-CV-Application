export default function DisplayEducationForm({
  id,
  school,
  degree,
  city,
  date,
  end_date,
  description,
  handleInputChange,
  changeFormDisplay,
}) {
  return (
    <>
      <form className="education-details">
        <div className="comment education-school">
          <input
            type="text"
            name="school"
            id="school"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={school || ""}
            onChange={(e) => handleInputChange(id, "title", e.target.value)}
            required
          />
          <label htmlFor="school">School</label>
        </div>
        <div className="comment education-degree">
          <input
            type="text"
            name="degree"
            id="degree"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={degree || ""}
            onChange={(e) => handleInputChange(id, "degree", e.target.value)}
            required
          />
          <label htmlFor="degree">Degree</label>
        </div>
        <div className="comment education-city">
          <input
            type="text"
            name="city"
            id="city"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={city || ""}
            onChange={(e) => handleInputChange(id, "city", e.target.value)}
            required
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="comment education-date">
          <input
            type="month"
            name="date"
            id="date"
            onChange={(e) => handleInputChange(id, "date", e.target.value)}
            value={date || ""}
            required
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="comment education-endDate">
          <input
            type="month"
            name="endDate"
            id="endDate"
            onChange={(e) => handleInputChange(id, "end_date", e.target.value)}
            value={end_date || ""}
            required
          />
          <label htmlFor="endDate">End Date</label>
        </div>
        <div className="comment education-description">
          <input
            type="text"
            name="description"
            id="description"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={description || ""}
            onChange={(e) =>
              handleInputChange(id, "description", e.target.value)
            }
            required
          />
          <label htmlFor="description">Description</label>
        </div>
        <button
          type="button"
          className="education-btn"
          onClick={() => changeFormDisplay(id)}
        >
          Close
        </button>
      </form>
    </>
  );
}

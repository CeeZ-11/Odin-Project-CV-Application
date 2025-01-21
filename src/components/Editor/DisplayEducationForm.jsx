export default function DisplayEducationForm({
  id,
  school,
  degree,
  city,
  date,
  end_date,
  description,
  handleEducInputChange,
  changeEducationFormDisplay,
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
            onChange={(e) =>
              handleEducInputChange(id, "school", e.target.value)
            }
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
            onChange={(e) =>
              handleEducInputChange(id, "degree", e.target.value)
            }
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
            onChange={(e) => handleEducInputChange(id, "city", e.target.value)}
            required
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="comment education-date">
          <input
            type="month"
            name="date"
            id="date"
            onChange={(e) => handleEducInputChange(id, "date", e.target.value)}
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
            onChange={(e) =>
              handleEducInputChange(id, "end_date", e.target.value)
            }
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
            maxLength="500"
            value={description || ""}
            onChange={(e) =>
              handleEducInputChange(id, "description", e.target.value)
            }
            required
          />
          <label htmlFor="description">Description</label>
        </div>
        <button
          type="button"
          className="education-btn"
          onClick={() => changeEducationFormDisplay(id)}
        >
          Close
        </button>
      </form>
    </>
  );
}

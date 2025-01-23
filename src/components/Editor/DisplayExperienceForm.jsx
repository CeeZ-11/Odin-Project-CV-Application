export default function DisplayExperienceForm({
  id,
  job_title,
  employer,
  employment_type,
  date,
  end_date,
  location,
  work_arrangement,
  description,
  handleExpInputChange,
  changeExperienceFormDisplay,
}) {
  return (
    <>
      <form className="experience-details">
        <div className="comment experience-job_title">
          <input
            type="text"
            name="job_title"
            id="job_title"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={job_title || ""}
            onChange={(e) =>
              handleExpInputChange(id, "job_title", e.target.value)
            }
            required
          />
          <label htmlFor="job_title">Job Title</label>
        </div>
        <div className="comment experience-employer">
          <input
            type="text"
            name="employer"
            id="employer"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={employer || ""}
            onChange={(e) =>
              handleExpInputChange(id, "employer", e.target.value)
            }
            required
          />
          <label htmlFor="employer">Employer</label>
        </div>
        <div className="comment experience-employment_type">
          <input
            type="text"
            name="employment_type"
            id="employment_type"
            pattern="^[^0-9]+$"
            maxLength="30"
            value={employment_type || ""}
            onChange={(e) =>
              handleExpInputChange(id, "employment_type", e.target.value)
            }
            required
          />
          <label htmlFor="employment_type">Employment Type</label>
        </div>
        <div className="comment experience-work_arrangement">
          <input
            type="text"
            name="work_arrangement"
            id="work_arrangement"
            pattern="^[^0-9]+$"
            maxLength="30"
            value={work_arrangement || ""}
            onChange={(e) =>
              handleExpInputChange(id, "work_arrangement", e.target.value)
            }
            required
          />
          <label htmlFor="work_arrangement">Work Arrangement</label>
        </div>
        <div className="comment experience-date">
          <input
            type="month"
            name="date"
            id="date"
            onChange={(e) => handleExpInputChange(id, "date", e.target.value)}
            value={date || ""}
            required
          />
          <label htmlFor="date">Date</label>
        </div>
        <div className="comment experience-endDate">
          <input
            type="month"
            name="endDate"
            id="endDate"
            onChange={(e) =>
              handleExpInputChange(id, "end_date", e.target.value)
            }
            value={end_date || ""}
            required
          />
          <label htmlFor="endDate">End Date</label>
        </div>
        <div className="comment experience-location">
          <input
            type="text"
            name="location"
            id="location"
            pattern="^[^0-9]+$"
            maxLength="100"
            value={location || ""}
            onChange={(e) =>
              handleExpInputChange(id, "location", e.target.value)
            }
            required
          />
          <label htmlFor="location">Location</label>
        </div>

        <div className="comment experience-description">
          <textarea
            type="text"
            name="description"
            id="description"
            pattern="^[^0-9]+$"
            maxLength="200"
            value={description || ""}
            onChange={(e) =>
              handleExpInputChange(id, "description", e.target.value)
            }
            required
          />
          <label htmlFor="description" className="textareaLabel">
            Description
          </label>
        </div>
        <button
          type="button"
          className="experience-btn"
          onClick={() => changeExperienceFormDisplay(id)}
        >
          Close
        </button>
      </form>
    </>
  );
}

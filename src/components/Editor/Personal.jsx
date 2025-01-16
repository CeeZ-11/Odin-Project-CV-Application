export default function Personal() {
  return (
    <>
      <h3>Personal Details</h3>
      <hr className="grey-line" />
      <form className="personl-details">
        <div className="fName">
          <label htmlFor="fName" data-help="you need help?">
            First Name
          </label>
          <input
            type="text"
            name="fName"
            id="fName"
            pattern="^[^0-9]+$"
            size="15"
            maxLength="25"
            placeholder="First Name"
            required
          />
        </div>
      </form>
    </>
  );
}

export default function Personal() {
  return (
    <>
      <h3>Personal Details</h3>
      <hr className="grey-line" />
      <form className="personal-details">
        <div className="comment fName">
          <input
            type="text"
            name="fName"
            id="fName"
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="James"
            required
          />
          <label htmlFor="fName">First Name</label>
        </div>
        <div className="comment lName">
          <input
            type="text"
            name="lName"
            id="lName"
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="Denver"
            required
          />
          <label htmlFor="lName">Last Name</label>
        </div>
        <div className="comment occupation">
          <input
            type="text"
            name="occupation"
            id="occupation"
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="Full Stack Developer"
            required
          />
          <label htmlFor="occupation">Occupation</label>
        </div>
        <div className="comment phoneNumber">
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            pattern="\(\+54\) 9 [0-9]{4} [0-9]{5}"
            maxLength="25"
            placeholder="(+54) 9 2706 64116"
            required
          />
          <label htmlFor="phoneNumber">Phone</label>
        </div>
        <div className="comment profEmail">
          <input
            type="email"
            name="profEmail"
            id="profEmail"
            maxLength="25"
            placeholder="james@gmail.com"
            required
          />
          <label htmlFor="profEmail">Email</label>
        </div>
        <div className="comment portfolio">
          <input
            type="url"
            name="portfolio"
            id="portfolio"
            maxLength="25"
            placeholder="portfolio@example.com"
            required
          />
          <label htmlFor="portfolio">Portfolio</label>
        </div>
        <div className="comment address wideSpan">
          <input
            type="text"
            name="address"
            id="address"
            maxLength="50"
            placeholder="123 Main Street, City, Country"
            required
          />
          <label htmlFor="address">Address</label>
        </div>
        <div className="comment profile wideSpan">
          <textarea
            id="profile"
            name="profile"
            maxLength="350"
            placeholder="Motivated and detail-oriented professional with a passion for delivering high-quality work. Equipped with strong problem-solving skills, a commitment to continuous learning, and the ability to adapt to new challenges. Dedicated to achieving results through collaboration, efficiency, and innovation. Seeking an opportunity to contribute to organizational success while growing professionally."
            required
          ></textarea>
          <label htmlFor="profile" className="textareaLabel">
            Profile
          </label>
        </div>
      </form>
    </>
  );
}

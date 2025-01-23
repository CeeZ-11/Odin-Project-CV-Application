import { useState } from "react";

const personalList = [
  {
    fName: "James",
    lName: "Denver",
    occupation: "Frontend Developer",
    phone: "(+54) 9 2706 64116",
    email: "james@gmail.com",
    portfolio: "portfolio@example.com",
    address: "123 Main Street, City, Country",
    profile:
      "Motivated and detail-oriented professional with a passion for delivering high-quality work. Equipped with strong problem-solving skills, a commitment to continuous learning, and the ability to adapt to new challenges. Dedicated to achieving results through collaboration, efficiency, and innovation. Seeking an opportunity to contribute to organizational success while growing professionally.",
  },
];

export default function Personal() {
  const [personal, setPersonal] = useState(personalList[0]);

  const handleInputChange = (field, value) => {
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      [field]: value,
    }));
  };

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
            value={personal.fName}
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="James"
            onChange={(e) => handleInputChange("fName", e.target.value)}
            required
          />
          <label htmlFor="fName">First Name</label>
        </div>
        <div className="comment lName">
          <input
            type="text"
            name="lName"
            id="lName"
            value={personal.lName}
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="Denver"
            onChange={(e) => handleInputChange("lName", e.target.value)}
            required
          />
          <label htmlFor="lName">Last Name</label>
        </div>
        <div className="comment occupation">
          <input
            type="text"
            name="occupation"
            id="occupation"
            value={personal.occupation}
            pattern="^[^0-9]+$"
            maxLength="25"
            placeholder="Full Stack Developer"
            onChange={(e) => handleInputChange("occupation", e.target.value)}
            required
          />
          <label htmlFor="occupation">Occupation</label>
        </div>
        <div className="comment phoneNumber">
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={personal.phone}
            pattern="\(\+54\) 9 [0-9]{4} [0-9]{5}"
            maxLength="25"
            placeholder="(+54) 9 2706 64116"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            required
          />
          <label htmlFor="phoneNumber">Phone</label>
        </div>
        <div className="comment profEmail">
          <input
            type="email"
            name="profEmail"
            id="profEmail"
            value={personal.email}
            maxLength="25"
            placeholder="james@gmail.com"
            onChange={(e) => handleInputChange("profEmail", e.target.value)}
            required
          />
          <label htmlFor="profEmail">Email</label>
        </div>
        <div className="comment portfolio">
          <input
            type="url"
            name="portfolio"
            id="portfolio"
            value={personal.portfolio}
            maxLength="25"
            placeholder="portfolio@example.com"
            onChange={(e) => handleInputChange("portfolio", e.target.value)}
            required
          />
          <label htmlFor="portfolio">Portfolio</label>
        </div>
        <div className="comment address wideSpan">
          <input
            type="text"
            name="address"
            id="address"
            value={personal.address}
            maxLength="50"
            placeholder="123 Main Street, City, Country"
            onChange={(e) => handleInputChange("address", e.target.value)}
            required
          />
          <label htmlFor="address">Address</label>
        </div>
        <div className="comment profile wideSpan">
          <textarea
            id="profile"
            value={personal.profile}
            name="profile"
            maxLength="350"
            placeholder="Motivated and detail-oriented professional with a passion for delivering high-quality work. Equipped with strong problem-solving skills, a commitment to continuous learning, and the ability to adapt to new challenges. Dedicated to achieving results through collaboration, efficiency, and innovation. Seeking an opportunity to contribute to organizational success while growing professionally."
            onChange={(e) => handleInputChange("profile", e.target.value)}
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

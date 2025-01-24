import "./Head.css";

export default function Head({
  personal,
  file,
  phoneIcon,
  emailIcon,
  websiteIcon,
}) {
  return (
    <div className="resume-head">
      <div className="head-profile-pic">
        <img className="profile-button" src={file} alt="" />
      </div>
      <div className="head-profile-header">
        <h2>
          {personal.fName} {personal.lName}
        </h2>
        <h4>{personal.occupation}</h4>
        <div className="head-details">
          <img src={phoneIcon} alt="phone" className="head-phone" />
          <p>{personal.phone}</p>
        </div>
        <div className="head-details">
          <img src={emailIcon} alt="phone" className="head-email" />
          <p>{personal.email}</p>
        </div>
        <div className="head-details">
          <img src={websiteIcon} alt="phone" className="head-website" />
          <p>{personal.portfolio}</p>
        </div>
      </div>
    </div>
  );
}

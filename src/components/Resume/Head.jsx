import "./Head.css";
export default function Head({ personal, file }) {
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
          <div className="head-phone"></div>
          <p>{personal.phone}</p>
        </div>
        <div className="head-details">
          <div className="head-email"></div>
          <p>{personal.email}</p>
        </div>
        <div className="head-details">
          <div className="head-website"></div>
          <p>{personal.portfolio}</p>
        </div>
      </div>
    </div>
  );
}

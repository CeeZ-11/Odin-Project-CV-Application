import "./Head.css";

export default function Head() {
  return (
    <div className="resume-head">
      <div className="head-profile-pic">
        <button className="profile-button"></button>
      </div>

      <div className="head-profile-header">
        <h2>Jordan Clark</h2>
        <h4>Graphic Designer</h4>
        <div className="head-details">
          <div className="head-phone"></div>
          <p>(+54) 9 2706 64116</p>
        </div>
        <div className="head-details">
          <div className="head-email"></div>
          <p>seamorestrabon@gmail.com</p>
        </div>
        <div className="head-details">
          <div className="head-website"></div>
          <p>ceez-11.github.io/Portfolio_Website/</p>
        </div>
      </div>
    </div>
  );
}

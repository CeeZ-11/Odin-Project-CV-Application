import "./Main.css";

export default function Main() {
  return (
    <div className="resume-body">
      <div className="aside">
        <h3>PROFILE</h3>
        <hr className="aside-grey-line" />
        <p>
          Motivated and detail-oriented professional with a passion for
          delivering high-quality work. Equipped with strong problem-solving
          skills, a commitment to continuous learning, and the ability to adapt
          to new challenges. Dedicated to achieving results through
          collaboration, efficiency, and innovation. Seeking an opportunity to
          contribute to organizational success while growing professionally.
        </p>
        <h3>SKILLS</h3>
        <hr className="aside-grey-line" />
        <ul>
          <li>Attention to detail</li>
          <li>Creative thinking</li>
          <li>Teamwork</li>
        </ul>
        <h3>ACHIEVEMENTS</h3>
        <hr className="aside-grey-line" />
        <ul>
          <li>
            Increased Website Traffic: Optimized SEO strategies and improved
            content strategies. Increased website traffic by 40%. (2023-01 -
            2023-03)
          </li>
          <li>
            Led Mobile App Development: Managed the development and launch of a
            mobile app, coordinating with a team of developers. Achieved 50,000
            downloads within the first 3 months. (2023-03 - 2023-05)
          </li>
        </ul>
      </div>
      <hr className="resume-grey-line" />
      <div className="main">
        <h3>EDUCATION</h3>
        <hr className="main-grey-line" />
        <h4>University of St. La Salle - Bacolod</h4>
        <h5>BS Information Technology - Major in Web and Mobile Development</h5>
        <p>2023-01 - 2023-05</p>
        <ul>
          <li>
            Successfully completed a capstone project involving the design and
            development of a complex web application, demonstrating the ability
            to apply theoretical knowledge to real-world scenarios.
          </li>
        </ul>
        <h3>EXPERIENCE</h3>
        <hr className="main-grey-line" />
        <h4>Logistics Coordinator</h4>
        <h5>Rulewave - Full-Time</h5>
        <p>2023-01 - 2023-05</p>
        <p>Houston, Texas, United States - Remote</p>
        <ul>
          <li>
            I have extensive experience in supply chain operations, data
            analysis, and logistics. As a DSC IBD Processor, I optimized
            processes, resolved shipping errors, and provided customer support.
            As a Data Analyst, I analyzed logistics data to ensure reliability
            and maintained databases. In Dropshipping, I managed shipments,
            resolved inventory issues, and ensured timely deliveries.
          </li>
        </ul>

        <h4>Monitoring Engineer</h4>
        <h5>MID Construction Group - Full-Time</h5>
        <p>2023-01 - 2023-05</p>
        <p>Los Angeles, California, United States - Remote</p>
        <ul>
          <li>
            Monitored 45+ Google Meet sessions, tracked attendance, managed
            login/logout records, and enforced rules with documented evidence of
            violations. Provided technical support for Google Meet, evaluated
            employee performance, prepared ethics reports, and optimized
            spreadsheets to improve workflow efficiency, while handling
            additional tasks as needed.
          </li>
        </ul>
      </div>
    </div>
  );
}

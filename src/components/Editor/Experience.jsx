import { useState } from "react";

const experienceList = [
  {
    id: 0,
    job_title: "Logistics Coordinator",
    employer: "Rulewave",
    employment_type: "Full-Time",
    date: "2023-01",
    end_date: "2023-03",
    location: "Houston, Texas, United States",
    work_arrangement: "Remote",
    description:
      "I have extensive experience in supply chain operations, data analysis, and logistics. As a DSC IBD Processor, I optimized processes, resolved shipping errors, and provided customer support. As a Data Analyst, I analyzed logistics data to ensure reliability and maintained databases. In Dropshipping, I managed shipments, resolved inventory issues, and ensured timely deliveries.",
    display: true,
  },
];

export default function Experience() {
  const [experience, setExperience] = useState(experienceList);

  const removeExperience = (id) => {
    const updatedExperience = experience
      .filter((exp) => exp.id !== id)
      .map((exp, index) => ({
        ...exp,
        id: index,
      }));
    setExperience(updatedExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        id: experience.length,
        job_title: "",
        employer: "",
        employment_type: "",
        date: "",
        end_date: "",
        location: "",
        work_arrangement: "",
        description: "",
        display: true,
      },
    ]);
  };

  const changeExperienceDisplay = (id) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          display: false,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  const changeExperienceFormDisplay = (id) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          display: true,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  const handleExpInputChange = (id, field, value) => {
    const updatedExperience = experience.map((exp) => {
      if (exp.id === id) {
        return {
          ...exp,
          [field]: value,
        };
      }
      return exp;
    });
    setExperience(updatedExperience);
  };

  return (
    <>
      <div className="titles experience-title">
        <h3>Experience</h3>
        <button type="button" onClick={addExperience}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="experience-ul">
        {experience.map((exp) => (
          <div className="experience-container" key={exp.id}>
            <li className="experience-li">
              <DisplayExperience
                id={exp.id}
                job_title={exp.job_title}
                employer={exp.employer}
                employment_type={exp.employment_type}
                date={exp.date}
                end_date={exp.end_date}
                location={exp.location}
                work_arrangement={exp.work_arrangement}
                description={exp.description}
                display={exp.display}
                removeExperience={removeExperience}
                changeExperienceDisplay={changeExperienceDisplay}
                handleExpInputChange={handleExpInputChange}
                changeExperienceFormDisplay={changeExperienceFormDisplay}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

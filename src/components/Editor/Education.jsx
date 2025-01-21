import { useState } from "react";
import DisplayEducation from "./DisplayEducation";

const educationList = [
  {
    id: 0,
    school: "University of St. La Salle - Bacolod",
    degree: "BS Information Technology - Major in Web and Mobile Development",
    city: "Bacolod City",
    date: "2023-01",
    end_date: "2023-03",
    description:
      "Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
    display: true,
  },
];

export default function Education() {
  const [education, setEducation] = useState(educationList);

  const removeEducation = (id) => {
    const updatedEducation = education
      .filter((educ) => educ.id !== id)
      .map((educ, index) => ({
        ...educ,
        id: index,
      }));
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: education.length,
        school: "University of ",
        degree: "",
        city: "",
        date: "",
        end_date: "",
        description: "",
        display: true,
      },
    ]);
  };

  const changeDisplay = (id) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...education,
          display: false,
        };
      }
      return education;
    });
    setEducation(updatedEducation);
  };

  const changeFormDisplay = (id) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...education,
          display: true,
        };
      }
      return education;
    });
    setEducation(updatedEducation);
  };

  const handleInputChange = (id, field, value) => {
    const updatedEducation = education.map((educ) => {
      if (educ.id === id) {
        return {
          ...education,
          [field]: value,
        };
      }
      return education;
    });
    setEducation(updatedEducation);
  };

  return (
    <>
      <div className="titles education-title">
        <h3>Education</h3>{" "}
        <button type="button" onClick={addEducation}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="education-ul">
        {education.map((educ) => (
          <div className="achievements-container" key={educ.id}>
            <li className="achievements-li">
              <DisplayEducation
                id={educ.id}
                school={educ.school}
                degree={educ.degree}
                city={educ.city}
                date={educ.date}
                end_date={educ.end_date}
                description={educ.description}
                display={educ.display}
                removeEducation={removeEducation}
                changeDisplay={changeDisplay}
                handleInputChange={handleInputChange}
                changeFormDisplay={changeFormDisplay}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

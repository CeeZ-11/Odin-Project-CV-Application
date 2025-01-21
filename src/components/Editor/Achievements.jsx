import { useState } from "react";
import DisplayAchievements from "./DisplayAchievements";

const achievementsList = [
  {
    id: 0,
    title: "Increased Website Traffic",
    description: "Optimized SEO strategies and improved content strategies.",
    result: "Increased website traffic by 40%.",
    date: "2023-01",
    end_date: "2023-03",
    display: true,
  },
  {
    id: 1,
    title: "Led Mobile App Development",
    description:
      "Managed the development and launch of a mobile app, coordinating with a team of developers.",
    result: "Achieved 50,000 downloads within the first 3 months.",
    date: "2023-03",
    end_date: "2023-05",
    display: true,
  },
  {
    id: 2,
    title: "Generated New Business",
    description:
      "Leveraged lead-generation techniques and maintained client relationships.",
    result: "Generated $100,000 in new business.",
    date: "2023-05",
    end_date: "2023-07",
    display: true,
  },
];

export default function Achievements() {
  const [achievements, setAchievements] = useState(achievementsList);

  const removeAchievements = (id) => {
    const updatedAchievements = achievements
      .filter((achievement) => achievement.id !== id)
      .map((achievement, index) => ({
        ...achievement,
        id: index,
      }));
    setAchievements(updatedAchievements);
  };

  const addAchievements = () => {
    setAchievements([
      ...achievements,
      {
        id: achievements.length,
        title: "",
        description: "",
        result: "",
        date: "",
        display: true,
      },
    ]);
  };

  const changeDisplay = (id) => {
    const updatedAchievements = achievements.map((achievement) => {
      if (achievement.id === id) {
        return {
          ...achievement,
          display: false,
        };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  const handleInputChange = (id, field, value) => {
    const updatedAchievements = achievements.map((achievement) => {
      if (achievement.id === id) {
        return {
          ...achievement,
          [field]: value,
        };
      }
      return achievement;
    });
    setAchievements(updatedAchievements);
  };

  return (
    <>
      <div className="titles achievements-title">
        <h3>Achievements</h3>{" "}
        <button type="button" onClick={addAchievements}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="achievements-ul">
        {achievements.map((achievement) => (
          <div className="achievements-container" key={achievement.id}>
            <li className="achievements-li">
              <DisplayAchievements
                id={achievement.id}
                title={achievement.title}
                description={achievement.description}
                result={achievement.result}
                date={achievement.date}
                end_date={achievement.end_date}
                display={achievement.display}
                removeAchievements={removeAchievements}
                changeDisplay={changeDisplay}
                handleInputChange={handleInputChange}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

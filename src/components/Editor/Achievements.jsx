import { useState } from "react";

const achievementsList = [
  {
    id: 0,
    title: "Increased Website Traffic",
    description: "Optimized SEO strategies and improved content strategies.",
    result: "Increased website traffic by 40%.",
    date: "January 2023 - June 2023",
  },
  {
    id: 1,
    title: "Led Mobile App Development",
    description:
      "Managed the development and launch of a mobile app, coordinating with a team of developers.",
    result: "Achieved 50,000 downloads within the first 3 months.",
    date: "March 2023 - May 2023",
  },
  {
    id: 2,
    title: "Generated New Business",
    description:
      "Leveraged lead-generation techniques and maintained client relationships.",
    result: "Generated $100,000 in new business.",
    date: "April 2023 - October 2023",
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
      },
    ]);
  };

  return (
    <>
      <div className="achievements-title">
        <h3>Achievements</h3>{" "}
        <button type="button" onClick={addAchievements}>
          +
        </button>
      </div>

      <hr className="grey-line" />

      <ul className="achievements-ul">
        {achievements.map((achievement) => (
          <div className="achievements-container" key={achievement.id}>
            <li>
              <div className="achievement-list">
                <h5>{achievement.title}</h5>
                <p>{achievement.description}</p>
                <p>{achievement.result}</p>
                <p>{achievement.date}</p>
                <button type="button">Edit</button>
              </div>
              <button
                type="button"
                onClick={() => removeAchievements(achievement.id)}
              >
                x
              </button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

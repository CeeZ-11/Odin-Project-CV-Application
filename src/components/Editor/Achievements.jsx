import DisplayAchievements from "./DisplayAchievements";

export default function Achievements({
  achievements,
  removeAchievements,
  addAchievements,
  changeAchievementDisplay,
  changeAchievementFormDisplay,
  handleAchievementInputChange,
}) {
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
                changeAchievementDisplay={changeAchievementDisplay}
                handleAchievementInputChange={handleAchievementInputChange}
                changeAchievementFormDisplay={changeAchievementFormDisplay}
              />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

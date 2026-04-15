import data from "../data/data.json";

function Skills() {
  return (
    <div className="skills">
      {data.Skills.map((skill) => (
        <div key={skill.Area}>
          <h2>{skill.Area}</h2>
          <ul>
            {skill.SkillSet.map((s) => (
              <li key={s.Name}>
                {s.Name} {s.Hot}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
import './Skills.css';

export default function Skills(props) {
  return (
    <div>
      {props.cvData.skillsData.length > 0 && <h2>Skills</h2>}
      <div className="skill-item">
        {props.cvData.skillsData.map(skillItem => (
          <p key={skillItem.id}>{skillItem.skill ? skillItem.skill : 'Skill name'}</p>
        ))}
      </div>
    </div>
  );
}

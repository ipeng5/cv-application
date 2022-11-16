import './Skills.css';

export default function Skills(props) {
  return (
    <div>
      <h2>Skills</h2>
      <div className="skill-item">
        {props.cvData.skillsData.map(skillItem => (
          <p key={skillItem.id}>Marketing{skillItem.skill}</p>
        ))}
      </div>
    </div>
  );
}

import { useTheme } from '../../hooks/useTheme';
import './Skills.css';

export default function Skills(props) {
  const { color } = useTheme();

  return (
    <div>
      {props.cvData.skillsData.length > 0 && <h2>Skills</h2>}
      <div className="skill-item">
        {props.cvData.skillsData.map(skillItem => (
          <p key={skillItem.id} style={{ backgroundColor: color }}>
            {skillItem.skill ? skillItem.skill : 'Skill'}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceItem(props) {
  return (
    <div className="experience-section">
      <div>
        <h3>{props.experienceItem.title ? props.experienceItem.title : 'Job title'}</h3>
        <div className="details">
          <h4>{props.experienceItem.employer ? props.experienceItem.employer : 'Employer'}</h4>
          <h4>
            {props.experienceItem.from} - {props.experienceItem.to}
          </h4>
        </div>
      </div>
      <p>{props.experienceItem.description}</p>
    </div>
  );
}

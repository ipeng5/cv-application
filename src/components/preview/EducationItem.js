export default function EducationItem(props) {
  return (
    <div className="education-section">
      <h3>{props.educationItem.uni ? props.educationItem.uni : 'University name'}</h3>
      <div className="details">
        <h4>{props.educationItem.subject ? props.educationItem.subject : 'Degree / Subject'}</h4>
        <h4 className="date">
          {props.educationItem.from} - {props.educationItem.to}
        </h4>
      </div>
    </div>
  );
}

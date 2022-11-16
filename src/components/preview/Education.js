import EducationItem from './EducationItem';

export default function Education(props) {
  const educationItems = props.cvData.educationData.map(educationItem => (
    <EducationItem key={educationItem.id} educationItem={educationItem} />
  ));
  return (
    <div>
      {educationItems.length > 0 && <h2>Education</h2>}
      {educationItems}
    </div>
  );
}

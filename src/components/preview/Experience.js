import ExperienceItem from './ExperienceItem';

export default function Experience(props) {
  const experienceItems = props.cvData.experienceData.map(experienceItem => (
    <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
  ));
  return (
    <div>
      {experienceItems.length > 0 && <h2>Experience</h2>}
      {experienceItems}
    </div>
  );
}

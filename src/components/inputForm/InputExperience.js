import InputExperienceItem from './InputExperienceItem';

export default function InputExperience(props) {
  const experienceItems = props.cvData.experienceData.map(experienceItem => (
    <InputExperienceItem
      key={experienceItem.id}
      onDelete={props.onDeleteExperience}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={props.onChangeExperience}
    />
  ));
  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Work Experience</h2>
        <button className="btn-add" onClick={props.onAddExperience}>
          &#43;&nbsp;&nbsp;Add
        </button>
      </div>
      {experienceItems}
    </div>
  );
}

import InputExperienceItem from './InputExperienceItem';

export default function InputExperience(props) {
  const experienceItems = props.cvData.experienceData.map(experienceItem => (
    <InputExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onDelete={props.onDeleteExperience}
      onChange={props.onChangeExperience}
    />
  ));

  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Experience</h2>
        <button className="btn-add" onClick={props.onAddExperience}>
          &#43;&nbsp;&nbsp;Add
        </button>
      </div>
      {experienceItems}
    </div>
  );
}

import InputEducationItem from './InputEducationItem';

export default function InputEducation(props) {
  const educationItems = props.cvData.educationData.map(educationItem => (
    <InputEducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onDelete={props.onDeleteEducation}
      onChange={props.onChangeEducation}
    />
  ));

  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Education</h2>
        <button className="btn-add" onClick={props.onAddEducation}>
          &#43;&nbsp;&nbsp;Add
        </button>
      </div>
      {educationItems}
    </div>
  );
}

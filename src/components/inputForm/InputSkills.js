export default function InputSkills(props) {
  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Skills</h2>
        <button className="btn-add" onClick={props.onAddSkills}>
          &#43;&nbsp;&nbsp;Add
        </button>
      </div>
      {props.cvData.skillsData.map(skillItem => (
        <div className="section-head" key={skillItem.id}>
          <input
            type="text"
            placeholder="Skill"
            value={skillItem.skill}
            onChange={e => props.onChangeSkills(e, skillItem.id)}
          />
          <button className="btn-delete" onClick={() => props.onDeleteSkills(skillItem.id)}>
            &#215;
          </button>
        </div>
      ))}
    </div>
  );
}

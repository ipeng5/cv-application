export default function InputSkills() {
  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Skills</h2>
        <button className="btn-add">&#43;&nbsp;&nbsp;Add</button>
      </div>
      <div className="section-head">
        <input type="text" placeholder="Skill" />
        <button className="btn-delete">&#215;</button>
      </div>
    </div>
  );
}

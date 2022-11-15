export default function InputEducation() {
  return (
    <div className="input-section">
      <div className="section-head">
        <h2>Experience</h2>
        <button className="btn-add">&#43;&nbsp;&nbsp;Add</button>
      </div>
      <div className="section-head">
        <input type="text" placeholder="School name" />
        <button className="btn-delete">&#215;</button>
      </div>
      <div className="section-subhead">
        <input type="text" placeholder="Subject, degree" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
    </div>
  );
}

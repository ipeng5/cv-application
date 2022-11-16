export default function InputEducation() {
  return (
    <form className="input-section">
      <div className="section-head">
        <h2>Education</h2>
        <button className="btn-add">&#43;&nbsp;&nbsp;Add</button>
      </div>
      <div className="section-head">
        <input type="text" placeholder="University name" />
        <button className="btn-delete">&#215;</button>
      </div>
      <div className="section-subhead">
        <input type="text" placeholder="Subject, degree" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
    </form>
  );
}

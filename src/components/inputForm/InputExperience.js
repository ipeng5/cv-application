export default function InputExperience() {
  return (
    <form className="input-section">
      <div className="section-head">
        <h2>Work Experience</h2>
        <button className="btn-add">&#43;&nbsp;&nbsp;Add</button>
      </div>
      <div className="section-head">
        <input type="text" placeholder="Job title" />
        <button className="btn-delete">&#215;</button>
      </div>
      <div className="section-subhead">
        <input type="text" placeholder="Employer" className="haha" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
      <textarea rows="3" placeholder="Description"></textarea>
    </form>
  );
}

export default function InputEducationItem(props) {
  return (
    <>
      <div className="section-head">
        <input
          type="text"
          name="uni"
          placeholder="University name"
          value={props.educationItem.uni}
          onChange={e => props.onChange(e, props.id)}
        />
        <button className="btn-delete" onClick={() => props.onDelete(props.id)}>
          &#215;
        </button>
      </div>
      <div className="section-subhead">
        <input
          type="text"
          name="subject"
          placeholder="Subject, degree"
          value={props.educationItem.subject}
          onChange={e => props.onChange(e, props.id)}
        />
        <input
          type="text"
          name="from"
          placeholder="From"
          value={props.educationItem.from}
          onChange={e => props.onChange(e, props.id)}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={props.educationItem.to}
          onChange={e => props.onChange(e, props.id)}
        />
      </div>
    </>
  );
}

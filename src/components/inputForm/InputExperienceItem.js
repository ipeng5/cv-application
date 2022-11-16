export default function ExperienceItem(props) {
  return (
    <>
      <div className="section-head">
        <input
          type="text"
          name="title"
          placeholder="Job title"
          value={props.experienceItem.title}
          onChange={e => props.onChange(e, props.id)}
        />
        <button
          className="btn-delete"
          onClick={() => props.onDelete(props.id)}
          onChange={e => props.onChange(e, props.id)}>
          &#215;
        </button>
      </div>
      <div className="section-subhead">
        <input
          type="text"
          name="employer"
          placeholder="Employer"
          value={props.experienceItem.employer}
          onChange={e => props.onChange(e, props.id)}
        />
        <input
          type="text"
          name="from"
          placeholder="From"
          value={props.experienceItem.from}
          onChange={e => props.onChange(e, props.id)}
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={props.experienceItem.to}
          onChange={e => props.onChange(e, props.id)}
        />
      </div>
      <textarea
        rows="3"
        name="description"
        placeholder="Description"
        value={props.experienceItem.description}
        onChange={e => props.onChange(e, props.id)}></textarea>
    </>
  );
}

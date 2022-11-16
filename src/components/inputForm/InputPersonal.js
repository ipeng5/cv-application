export default function InputPersonal(props) {
  return (
    <form className="input-section">
      <h2>Personal details</h2>
      <input
        type="text"
        name="fullName"
        placeholder="Name"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.fullName}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.title}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.phone}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.email}
      />
      <input
        type="text"
        name="website"
        placeholder="Website"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.website}
      />
      <input
        type="text"
        name="linkedIn"
        placeholder="LinkedIn"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.linkedIn}
      />
      <textarea
        rows="3"
        name="summary"
        placeholder="Summary"
        onChange={e => props.onChangePersonal(e)}
        value={props.personalData.summary}
      />
    </form>
  );
}

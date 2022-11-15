export default function InputPersonal() {
  return (
    <div className="input-section">
      <h2>Personal details</h2>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Phone number" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Website" />
      <input type="text" placeholder="LinkedIn" />
      <textarea rows="3" placeholder="Description"></textarea>
    </div>
  );
}

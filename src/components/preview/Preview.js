import './Preview.css';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

export default function Preview(props) {
  return (
    <div className="preview">
      <Personal personalData={props.personalData} />
      <Skills />
      <Experience experienceData={props.experienceData} />
      <Education />
    </div>
  );
}

import './Preview.css';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

export default function Preview(props) {
  return (
    <div className="preview">
      <Personal cvData={props.cvData} />
      <Skills />
      <Experience cvData={props.cvData} />
      <Education />
    </div>
  );
}

import './Preview.css';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

export default function Preview(props) {
  return (
    <div className="preview" ref={props.ainnerRef}>
      <Personal cvData={props.cvData} />
      <Skills cvData={props.cvData} />
      <Experience cvData={props.cvData} />
      <Education cvData={props.cvData} />
    </div>
  );
}

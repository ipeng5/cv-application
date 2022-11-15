import './Preview.css';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';

export default function Preview() {
  return (
    <div className="preview">
      <Personal />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

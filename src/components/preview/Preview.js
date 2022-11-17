import './Preview.css';
import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import Skills from './Skills';
import { forwardRef } from 'react';

const Preview = forwardRef((props, ref) => {
  return (
    <div className="preview" ref={ref}>
      <Personal cvData={props.cvData} />
      <Skills cvData={props.cvData} />
      <Experience cvData={props.cvData} />
      <Education cvData={props.cvData} />
    </div>
  );
});

export default Preview;

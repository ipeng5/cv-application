import './InputForm.css';
import InputPersonal from './InputPersonal';
import InputSkills from './InputSkills';
import InputExperience from './InputExperience';
import InputEducation from './InputEducation';

export default function InputForm(props) {
  return (
    <div className="input-form">
      <InputPersonal personalData={props.personalData} onChange={props.onChange} />
      <InputSkills />
      <InputExperience />
      <InputEducation />
    </div>
  );
}

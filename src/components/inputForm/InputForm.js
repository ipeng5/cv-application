import './InputForm.css';
import InputPersonal from './InputPersonal';
import InputSkills from './InputSkills';
import InputExperience from './InputExperience';
import InputEducation from './InputEducation';

export default function InputForm() {
  return (
    <div className="input-form">
      <InputPersonal />
      <InputSkills />
      <InputExperience />
      <InputEducation />
    </div>
  );
}

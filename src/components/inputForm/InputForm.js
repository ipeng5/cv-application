import './InputForm.css';
import InputPersonal from './InputPersonal';
import InputSkills from './InputSkills';
import InputExperience from './InputExperience';
import InputEducation from './InputEducation';

export default function InputForm(props) {
  return (
    <div className="input-form">
      <InputPersonal cvData={props.cvData} onChangePersonal={props.onChangePersonal} />
      <InputSkills />
      <InputExperience
        cvData={props.cvData}
        experienceData={props.experienceData}
        onAddExperience={props.onAddExperience}
        onDeleteExperience={props.onDeleteExperience}
        onChangeExperience={props.onChangeExperience}
      />
      <InputEducation />
    </div>
  );
}

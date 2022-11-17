import './InputForm.css';
import InputPersonal from './InputPersonal';
import InputSkills from './InputSkills';
import InputExperience from './InputExperience';
import InputEducation from './InputEducation';
import saveIcon from '../../assets/save.svg';
import ThemeSelector from './ThemeSelector';

export default function InputForm(props) {
  return (
    <div className="input-form">
      <button className="btn-save" onClick={props.onSave}>
        <img src={saveIcon} alt="save PDF" />
        Save PDF
      </button>
      <ThemeSelector />
      <InputPersonal cvData={props.cvData} onChangePersonal={props.onChangePersonal} />
      <InputSkills
        cvData={props.cvData}
        onAddSkills={props.onAddSkills}
        onDeleteSkills={props.onDeleteSkills}
        onChangeSkills={props.onChangeSkills}
      />
      <InputExperience
        cvData={props.cvData}
        onAddExperience={props.onAddExperience}
        onDeleteExperience={props.onDeleteExperience}
        onChangeExperience={props.onChangeExperience}
      />
      <InputEducation
        cvData={props.cvData}
        onAddEducation={props.onAddEducation}
        onDeleteEducation={props.onDeleteEducation}
        onChangeEducation={props.onChangeEducation}
      />
    </div>
  );
}

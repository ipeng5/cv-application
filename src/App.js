import InputForm from './components/inputForm/InputForm';
import Preview from './components/preview/Preview';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [cvData, setCvData] = useState({
    personalData: {
      fullName: '',
      title: '',
      phone: '',
      email: '',
      website: '',
      linkedIn: '',
      summary: '',
    },
    skillsData: [{ id: nanoid(), skill: '' }],
    experienceData: [
      {
        id: nanoid(),
        title: '',
        employer: '',
        from: '',
        to: '',
        description: '',
      },
    ],
    educationData: [
      {
        id: nanoid(),
        uni: '',
        subject: '',
        from: '',
        to: '',
      },
    ],
  });

  const handleChangePersonal = e => {
    const { name, value } = e.target;
    setCvData(prevCvData => ({
      ...prevCvData,
      personalData: { ...prevCvData.personalData, [name]: value },
    }));
  };

  const handleAddSkills = () => {
    setCvData(prevCvData => ({
      ...prevCvData,
      skillsData: [...prevCvData.skillsData, { id: nanoid(), skill: '' }],
    }));
  };

  const handleDeleteSkills = id => {
    setCvData(prevCvData => {
      const updatedSkills = prevCvData.skillsData.filter(skill => skill.id !== id);
      return { ...prevCvData, skillsData: updatedSkills };
    });
  };

  const handleChangeSkills = (e, id) => {
    setCvData(prevCvData => {
      const updatedSkills = prevCvData.skillsData.map(skillItem => {
        if (skillItem.id === id) return { ...skillItem, skill: e.target.value };
        return skillItem;
      });
      return { ...prevCvData, skillsData: updatedSkills };
    });
  };

  const handleAddExperience = () => {
    setCvData(prevCvData => ({
      ...prevCvData,
      experienceData: [
        ...prevCvData.experienceData,
        { id: nanoid(), title: '', employer: '', from: '', to: '', description: '' },
      ],
    }));
  };

  const handleDeleteExperience = id => {
    setCvData(prevCvData => {
      const updatedExperience = prevCvData.experienceData.filter(exp => exp.id !== id);
      return { ...prevCvData, experienceData: updatedExperience };
    });
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setCvData(prevCvData => {
      const updatedExperience = prevCvData.experienceData.map(exp => {
        if (exp.id === id) return { ...exp, [name]: value };
        return exp;
      });
      return { ...prevCvData, experienceData: updatedExperience };
    });
  };

  return (
    <div className="App">
      <InputForm
        cvData={cvData}
        onChangePersonal={handleChangePersonal}
        onAddSkills={handleAddSkills}
        onDeleteSkills={handleDeleteSkills}
        onChangeSkills={handleChangeSkills}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeExperience={handleChangeExperience}
      />
      <Preview cvData={cvData} />
    </div>
  );
}

export default App;

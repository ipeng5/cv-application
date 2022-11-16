import InputForm from './components/inputForm/InputForm';
import Preview from './components/preview/Preview';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: '',
    title: '',
    phone: '',
    email: '',
    website: '',
    linkedIn: '',
    summary: '',
  });

  const [experienceData, setExperienceData] = useState([
    {
      id: nanoid(),
      title: '',
      employer: '',
      from: '',
      to: '',
      description: '',
    },
  ]);

  const handleChangePersonal = e => {
    const { name, value } = e.target;
    setPersonalData(prevPersonalData => ({ ...prevPersonalData, [name]: value }));
  };

  const handleAddExperience = () => {
    setExperienceData(prevExperienceData => [
      ...prevExperienceData,
      { id: nanoid(), title: '', employer: '', from: '', to: '', description: '' },
    ]);
  };

  const handleDeleteExperience = id => {
    setExperienceData(prevExperienceData => {
      const selectedExperience = prevExperienceData.filter(exp => exp.id !== id);
      return selectedExperience;
    });
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setExperienceData(prevExperienceData => {
      const newExperience = prevExperienceData.map(exp => {
        if (exp.id === id) {
          return { ...exp, [name]: value };
        }
        return exp;
      });
      return newExperience;
    });
  };

  return (
    <div className="App">
      <InputForm
        personalData={personalData}
        onChangePersonal={handleChangePersonal}
        experienceData={experienceData}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeExperience={handleChangeExperience}
      />
      <Preview personalData={personalData} experienceData={experienceData} />
    </div>
  );
}

export default App;

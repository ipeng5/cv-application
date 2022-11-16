import InputForm from './components/inputForm/InputForm';
import Preview from './components/preview/Preview';
import { useState } from 'react';

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

  const handleChangeFullName = e => {
    setPersonalData({ ...personalData, fullName: e.target.value });
  };

  const handleChangePersonal = e => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  return (
    <div className="App">
      <InputForm personalData={personalData} onChange={handleChangePersonal} />
      <Preview personalData={personalData} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import './App.css';

const App = () => {
  
    const [general, setGeneral] = useState({name: 'Cool Person',
                                            phone: '1234567890',
                                            email: 'coolperson@gmail.com',
                                            isEditing: false});


    const [experience, setExperience] = useState({company: '',
                                                  position: '',
                                                  startDate: '',
                                                  endDate: '',
                                                  id: uuidv4(),
                                                  isEditing: false});


    const [education, setEducation] = useState({school: '',
                                                course: '',
                                                start: '',
                                                end : '',
                                                id: uuidv4(),
                                                isEditing: false});

                        
    const [workExp, setWorkExp] = useState([]);
    const [pastEducation, setPastEducation] = useState([]);

    const [experienceForm, setExperienceForm] = useState(false);
    const [educationForm, setEducationForm] = useState(false);

  //General Info Handler Functions

  const handleGeneralEditing = () => {
   setGeneral ({
      ...general,
      isEditing: true
   });
  };

  const handleGeneralSave = () => {
    setGeneral ( {
        ...general,
        isEditing: false
    });
  };

  const handleGeneralInput = (updatedGeneral) => {

    setGeneral({...updatedGeneral});

  };

  //Experience Info Handler Functions

  const handleExperienceForm = () => {
    setExperienceForm (true);
  };

  const handleCancelExperience = () => {
    setExperienceForm(false);
  };


  const handleSaveExperience = (exp) => {
    setExperience({...experience, id: uuidv4()});
    setWorkExp(workExp.concat(exp));
    setExperienceForm(false);
  }

  const handleEditExperience = (id) => {

    const editedWorkExp = workExp.map((exp) => {
      if (exp.id === id) {
        exp.isEditing = true;
      }

      return exp;
    });

    setExperience({...experience, id: uuidv4()});
    setWorkExp(editedWorkExp);

  };

  const handleSaveEditExp = (id, editedWorkExp) => {

    const updatedWorkExp = editedWorkExp.map((exp) => {
      if (exp.id === id) {
        exp.isEditing = false;
      }

      return exp
    });

    setExperience({...experience, id: uuidv4()});
    setWorkExp(updatedWorkExp);

  };

  const handleRemoveExp = (id) => {

    const updatedWorkExp = workExp.filter((exp) => exp.id !== id);

    setExperience({...experience, id: uuidv4()});
    setWorkExp(updatedWorkExp);


  }

  //Education Info Handler Functions
  const handleEducationForm = () => {
    setEducationForm(true);
  };

  const handleCancelEducation = () => {
    setEducationForm(false);
  };

  const handleSaveEducation = (edu) => {
    setEducation({...education, id: uuidv4()});
    setPastEducation(pastEducation.concat(edu));
    setEducationForm(false);
  };

  const handleEditEducation = (id) => {

    const editedPastEdu = pastEducation.map((edu) => {
      if (edu.id === id) {
        edu.isEditing = true;
      }

      return edu;
    });

    setEducation({...education, id: uuidv4()});
    setPastEducation(editedPastEdu);
  };

  const handleSaveEditEdu = (id, editedPastEdu) => {

    const updatedPastEdu = editedPastEdu.map((edu) => {
      if (edu.id === id) {
        edu.isEditing = false;
      }
      return edu;
    });

    setEducation({...education, id: uuidv4()});
    setPastEducation(updatedPastEdu);

  }

  const handleRemoveEdu = (id) => {

    const updatedPastEdu = pastEducation.filter((edu) => edu.id !== id);

    setEducation({...education, id:uuidv4()});
    setPastEducation(updatedPastEdu);

  }


    //const { general, experience, workExp, education, pastEducation, experienceForm, educationForm } = this.state;

    return (
      <div className = "App">
        <h1 id="app-name"><i className="fa-solid fa-file icon"></i>Cv Maker</h1>
        <h3>Made by <a href='https://github.com/Shobhit-Nagpal/cv-maker' rel='noopener noreferrer' target='_blank'><span id='credit'>Shobhit Nagpal</span></a></h3>
        <div className="details">
          <>
            <General general={general} onEditGeneral = {handleGeneralEditing} onSaveGeneral={handleGeneralSave} onEditGeneralInput={handleGeneralInput}/>
          </>
          <div className="exp-edu">
            <div className="exp">
              <h1>Experience <button onClick={handleExperienceForm}>Add</button></h1>
              <Experience experience={experience}  workExp={workExp} onEditExperience={handleEditExperience} onSaveEditExp={handleSaveEditExp} onRemoveExp={handleRemoveExp}/>
              <ExperienceForm experience={experience} addExp={experienceForm} onCancelForm={handleCancelExperience} onSaveExperience={handleSaveExperience}/>
            </div>
            <div className="edu">
              <h1>Education <button onClick={handleEducationForm}>Add</button></h1>
              <Education education={education} pastEducation={pastEducation} onEditEducation={handleEditEducation} onSaveEditEdu={handleSaveEditEdu} onRemoveEdu={handleRemoveEdu}/>
              <EducationForm education={education} addEdu={educationForm} onCancelForm={handleCancelEducation} onSaveEducation={handleSaveEducation}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;

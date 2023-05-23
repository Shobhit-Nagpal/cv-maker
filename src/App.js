import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from './components/EducationForm';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {

      general: {

        name: 'Cool Person',
        phone: '1234567890',
        email: 'coolperson@gmail.com',
        isEditing: false

      },

      experience: {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        id: uuidv4(),
        isEditing: false
      },

      education: {
        school: '',
        course: '',
        start: '',
        end : '',
        id: uuidv4(),
        isEditing: false
      },

      workExp: [],
      pastEducation: [],

      experienceForm: false,
      educationForm: false

    }
  }

  //General Info Handler Functions

  handleGeneralEditing = () => {
   this.setState ( {
    general: {
      ...this.state.general,
      isEditing: true
    }
   } )
  };

  handleGeneralSave = () => {
    this.setState ( {
      general: {
        ...this.state.general,
        isEditing: false
      }
    } )
  };

  handleGeneralInput = (updatedGeneral) => {

    this.setState( {
      general: {...updatedGeneral}
    } )

  };

  //Experience Info Handler Functions

  handleExperienceForm = () => {
    
    this.setState ({
      ...this.state,
      experienceForm: true
    })
  };

  handleCancelExperience = () => {
    this.setState({
      ...this.state,
      experienceForm: false
    })
  };


  handleSaveExperience = (exp) => {
    this.setState( {
      ...this.state,
      id:uuidv4(),
      workExp: this.state.workExp.concat(exp),
      experienceForm: false
      
    } )
  }

  handleEditExperience = (id) => {

    const editedWorkExp = this.state.workExp.map((exp) => {
      if (exp.id === id) {
        exp.isEditing = true;
      }

      return exp;
    });

    this.setState( {
      ...this.state,
      id: uuidv4(),
      workExp: editedWorkExp
    } );

  };

  handleSaveEditExp = (id, editedWorkExp) => {

    const updatedWorkExp = editedWorkExp.map((exp) => {
      if (exp.id === id) {
        exp.isEditing = false;
      }

      return exp
    });

    this.setState( {
      ...this.state,
      id:uuidv4(),
      workExp: updatedWorkExp
    } )

  };

  handleRemoveExp = (id) => {

    const updatedWorkExp = this.state.workExp.filter((exp) => exp.id !== id);

    this.setState({
      ...this.state,
      workExp: updatedWorkExp,
      id:uuidv4()
    })


  }

  //Education Info Handler Functions
  handleEducationForm = () => {
    this.setState({
      ...this.state,
      educationForm:true
    });
  };

  handleCancelEducation = () => {
    this.setState({
      ...this.state,
      educationForm: false
    });
  };

  handleSaveEducation = (edu) => {

    this.setState({
      ...this.state,
      id: uuidv4(),
      pastEducation: this.state.pastEducation.concat(edu),
      educationForm: false
    })

  };

  handleEditEducation = (id) => {

    const editedPastEdu = this.state.pastEducation.map((education) => {
      if (education.id === id) {
        education.isEditing = true;
      }

      return education;
    });

    this.setState({
      ...this.state,
      id: uuidv4(),
      pastEducation: editedPastEdu

    });
  };

  handleSaveEditEdu = (id, editedPastEdu) => {

    const updatedPastEdu = editedPastEdu.map((education) => {
      if (education.id === id) {
        education.isEditing = false;
      }
      return education;
    });

    this.setState({
      ...this.state,
      id:uuidv4(),
      pastEducation: updatedPastEdu
    });

    console.log(this.state);

  }

  handleRemoveEdu = (id) => {

    const updatedPastEdu = this.state.pastEducation.filter((education) => education.id !== id);

    this.setState({
      ...this.state,
      pastEducation: updatedPastEdu,
      id: uuidv4()
    });

  }


  render() {

    const { general, experience, workExp, education, pastEducation, experienceForm, educationForm } = this.state;

    return (
      <div className = "App">
        <h1 id="app-name"><i className="fa-solid fa-file icon"></i>Cv Maker</h1>
        <h3>Made by <a href='https://github.com/Shobhit-Nagpal/cv-maker' rel='noopener noreferrer' target='_blank'><span id='credit'>Shobhit Nagpal</span></a></h3>
        <div className="details">
          <>
            <General general={general} onEditGeneral = {this.handleGeneralEditing} onSaveGeneral={this.handleGeneralSave} onEditGeneralInput={this.handleGeneralInput}/>
          </>
          <div className="exp-edu">
            <div className="exp">
              <h1>Experience <button onClick={this.handleExperienceForm}>Add</button></h1>
              <Experience experience={experience}  workExp={workExp} onEditExperience={this.handleEditExperience} onSaveEditExp={this.handleSaveEditExp} onRemoveExp={this.handleRemoveExp}/>
              <ExperienceForm experience={experience} addExp={experienceForm} onCancelForm={this.handleCancelExperience} onSaveExperience={this.handleSaveExperience}/>
            </div>
            <div className="edu">
              <h1>Education <button onClick={this.handleEducationForm}>Add</button></h1>
              <Education education={education} pastEducation={pastEducation} onEditEducation={this.handleEditEducation} onSaveEditEdu={this.handleSaveEditEdu} onRemoveEdu={this.handleRemoveEdu}/>
              <EducationForm education={education} addEdu={educationForm} onCancelForm={this.handleCancelEducation} onSaveEducation={this.handleSaveEducation}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

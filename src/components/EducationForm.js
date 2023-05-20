import React from "react";
import {v4 as uuidv4} from "uuid";

const EducationForm = (props) => {

    const {education, addEdu, onCancelForm, onSaveEducation} = props;

    const cancelForm = (e) => {
        e.preventDefault();
        onCancelForm();
    }

    const saveEducation = (e) => {
        e.preventDefault();

        const school = document.getElementById('school').value;
        const course = document.getElementById('course').value;
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;

        const edu = {
            ...education,
            school: school,
            course: course,
            start: start,
            end: end,
            id: uuidv4()

        }

        onSaveEducation(edu);


    }

    if (addEdu) {
        return(<div>
            <form className="form">
                <label htmlFor="school">School</label>
                <input type="text" id="school"></input>

                <br/>
                <br/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course"></input>

                <br/>
                <br/>

                <label htmlFor="start">Start</label>
                <input type="month" id="start"></input>

                <br/>
                <br/>

                <label htmlFor="end">End</label>
                <input type="month" id="end"></input>

                <button onClick={(e) => saveEducation(e)}>Save</button>
                <button onClick={(e) => cancelForm(e)}>Cancel</button>
            </form>
        </div>)
    }


    return null;
}

export default EducationForm;
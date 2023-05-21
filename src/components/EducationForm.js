import React from "react";

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
        }

        onSaveEducation(edu);


    }

    if (addEdu) {
        return(<div>
            <form className="form">
                <label htmlFor="school">School</label> <br/>
                <input type="text" id="school"></input>

                <br/>
                <br/>

                <label htmlFor="course">Course</label> <br/>
                <input type="text" id="course"></input>

                <br/>
                <br/>

                <label htmlFor="start">Start</label> <br/>
                <input type="month" id="start"></input>

                <br/>
                <br/>

                <label htmlFor="end">End</label> <br/>
                <input type="month" id="end"></input>

                <br/>

                <button onClick={(e) => saveEducation(e)}>Save</button>
                <button onClick={(e) => cancelForm(e)}>Cancel</button>
            </form>
        </div>)
    }


    return null;
}

export default EducationForm;
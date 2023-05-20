import React from "react";

const Education = (props) => {

    const {education, pastEducation, onEditEducation, onSaveEditEdu, onRemoveEdu} = props;

    const editEducation = (id) => {
        onEditEducation(id);
    }

    const saveEducation = (e,id) => {

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
            id: id

        }

        const updatedPastEdu = pastEducation.map((education) => {
            if (education.id === id) {
                education = edu;
            }
            return education;
        });

        onSaveEditEdu(id, updatedPastEdu)

    };

    const removeEducation = (id) => {
        onRemoveEdu(id);
    }

    
    return(<div>

        {pastEducation.map((education) => {
            return education.isEditing ? (<div key = {education.id}>
               <form className="form">
               <label htmlFor="school">School</label>
                <input type="text" id="school" defaultValue={education.school}></input>

                <br/>
                <br/>

                <label htmlFor="course">Course</label>
                <input type="text" id="course" defaultValue={education.course}></input>

                <br/>
                <br/>

                <label htmlFor="start">Start</label>
                <input type="month" id="start" defaultValue={education.start}></input>

                <br/>
                <br/>

                <label htmlFor="end">End</label>
                <input type="month" id="end" defaultValue={education.end}></input>

                <button onClick={(e) => saveEducation(e,education.id)}>Save</button>
               </form>
            </div>) : (<div className="education" key={education.id}>
                <h2>{education.school}</h2>
                <br/>
                <br/>
                <h3>Course: {education.course}</h3>
                <br/>
                <h4>Duration: {education.start} to {education.end}</h4>
                <br/>

                <button onClick={() => editEducation(education.id)}>Edit</button>
                <button onClick={() => removeEducation(education.id)}>Remove</button>
            </div>)
        })}

    </div>);

}

export default Education;
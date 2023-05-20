import React from "react";

const Experience = (props) => {

    const { experience, workExp, onEditExperience, onSaveEditExp, onRemoveExp } = props;

    const editExperience = (id) => {
        onEditExperience(id);
    }

    const saveExperience = (e,id) => {

        e.preventDefault();

        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const exp = {
            ...experience,
            company: company,
            position: position,
            startDate: startDate,
            endDate: endDate,
            id: id
        }

        const updatedWorkExp = workExp.map((experience) => {
            if (experience.id === id) {
                experience = exp;
            }
            return experience;
        })

        onSaveEditExp(id, updatedWorkExp);

    }

    const removeExp = (id) => {
        onRemoveExp(id)
    }


    return(<div>
        {workExp.map((work) => {
            return work.isEditing ? (<div key = {work.id}>
                <form className="form">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" defaultValue={work.company}></input>

                <br/>
                <br/>

                <label htmlFor="position">Position</label>
                <input type="text" id="position" defaultValue={work.position}></input>

                <br/>
                <br/>

                <label htmlFor="startDate">Start</label>
                <input type="date" id="startDate" defaultValue={work.startDate}></input>

                <br/>
                <br/>

                <label htmlFor="endDate">End</label>
                <input type="date" id="endDate" defaultValue={work.endDate}></input>

                <button onClick={(e) => saveExperience(e,work.id)}>Save</button>
                </form>
            </div>)
             : (<div className="work" key = {work.id}>
                <h2>{work.company}</h2>
                <br/>
                <br/>
                <h3>Position: {work.position}</h3>
                <br/>
                <h4>Duration: {work.startDate} to {work.endDate}</h4>
                <br/>

                <button onClick={() => editExperience(work.id)}>Edit</button>
                <button onClick={() => removeExp(work.id)}>Remove</button>
             </div>);
        })}
    </div>)

}

export default Experience;
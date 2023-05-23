import React from "react";

const ExperienceForm = (props) => {

    const {experience, addExp, onCancelForm, onSaveExperience} = props;

    const cancelForm = (e) => {
        e.preventDefault();
        onCancelForm();
    }

    const saveExperience = (e) => {
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
        }

        onSaveExperience(exp);
    } 

    if (addExp) {
        return (<div>

            <form className="form">
                <label htmlFor="company">Company</label> <br/>
                <input type="text" id="company"></input>
    
                <br/>
                <br/>
    
                <label htmlFor="position">Position</label> <br/>
                <input type="text" id="position"></input>
    
                <br/>
                <br/>
    
                <label htmlFor="startDate">Start Date</label> <br/>
                <input type="month" id="startDate"></input>
    
                <br/>
                <br/>
    
                <label htmlFor="endDate">End Date</label> <br/>
                <input type="month" id="endDate"></input>

                <br/>

                <button onClick={(e) => {saveExperience(e);}}>Save</button>
                <button onClick={(e) => {cancelForm(e);}}>Cancel</button>
            </form>
    
        </div>)
    }

    return null;
};

export default ExperienceForm
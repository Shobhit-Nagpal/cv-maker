import React from "react";

const General = (props) => {

    const {general, onEditGeneralInput, onEditGeneral, onSaveGeneral} = props

    const editGeneral = () => {
        onEditGeneral();
    }

    const saveGeneral = (e) => {
        e.preventDefault();
        onSaveGeneral();
    }

    const updateGeneral = (event) => {

        const id = event.target.id;
        const value = event.target.value;

        const updatedGeneral = {...general};

        if (id === 'name') {
            updatedGeneral.name = value;
        }
        else if (id === 'phone') {
            updatedGeneral.phone = value;
        }
        else {
            updatedGeneral.email = value;
        }

        
        onEditGeneralInput(updatedGeneral);
    }




    if (general.isEditing) {
        return (<div>

            <form className="form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" defaultValue={general.name} onChange={(e) => updateGeneral(e)}></input>

            <br/>
            <br/>

            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" defaultValue={general.phone} min="10" max="10" onChange={(e) => updateGeneral(e)}></input>

            <br/>
            <br/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" defaultValue={general.email} onChange={(e) => updateGeneral(e)}></input>

            <br/>
            <br/>

            <button onClick = {(e) => saveGeneral(e)}>Save</button>
            </form>

        </div>)
    }
    
    return (<div className="general">

        <h1 id="general-name">{general.name}</h1>
        <h3 id="general-phone">Phone: {general.phone}</h3>
        <h3 id="general-email">Email: {general.email}</h3>

        <button onClick={() => editGeneral()}>Edit</button>

    </div>)
}

export default General;
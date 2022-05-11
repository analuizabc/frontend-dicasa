
import React from "react";
import "./Note.css";


function Note({ note }) {
    return <div className="note">
        <img src={note.src} alt="carda" className="produtos"></img>
        <div className="noteTitle"><text className="nome">{note.title}</text></div>
        <div className="noteDescription"><text className="valor">{note.description}</text></div>
        <button className="button" ><h4 className="selecionar">Selecionar</h4></button>{' '}
    </div>;
}

export default Note;
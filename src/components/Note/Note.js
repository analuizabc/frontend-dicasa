
import React from "react";
import "./Note.css";


function Note({ note }) {
    return <div className="Note">
        <img src={note.src} alt="carda" className="produtos"></img>
        <div className="notetitle"><text className="nome">{note.title}</text></div>
        <div className="notedescription"><text className="valor">{note.description}</text></div>
        <button className="button" id=""><h4 className="selecionar">Selecionar</h4></button>{' '}
    </div>;
}

export default Note;
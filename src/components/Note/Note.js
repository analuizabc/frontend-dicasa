import React from "react";
import "./Note.css";
import { Button } from "react-bootstrap";

function Note({ note }) {
    return <div className="note">
        <img src={note.src} alt="carda" className="produtos"></img>
        <div className="noteTitle">{note.title}</div>
        <div className="noteDescription">{note.description}</div>
        <Button variant="dark" className="button">Selecionar</Button>{' '}
    </div>;
}

export default Note;
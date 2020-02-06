import React from 'react';

const Note = ({ noteList, deleteNote}) => {
    const notes = noteList.length ? (
        noteList.map((note) => {
        return (
            <div className = 'col-sm-4' key={note.id}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-subtitle"> {note.date} </p>
                        <p className="card-body"> {note.content} </p>
                        <button className="btn btn-secondary" onClick={() => {deleteNote(note.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
    )) : (<div><h1>There are no notes</h1></div>);

    return (
        <div className = "row"> {notes} </div>
    );
}

export default Note;
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NoteCard = ({ notes, deleteNote }) => {
    const noteList = notes.length ? (
        notes.map((note) => {
            return (
                <div className='col-sm-4' key={note.id}>
                    <div className="card">
                        <div className="card-body">
                            <Link to={'/' + note.id} style={{ textDecoration: 'none', color: 'black' }}>
                                <h5 className="card-title">{note.title}</h5>
                            </Link>
                            <p className="card-subtitle"> {note.date} </p>
                            <button className="btn btn-secondary" onClick={() => { deleteNote(note.id) }}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        )) : (<div><h1>There are no notes</h1></div>);

    return (
        <div className="row"> {noteList} </div>
    );
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}


export default connect(mapStateToProps)(NoteCard);
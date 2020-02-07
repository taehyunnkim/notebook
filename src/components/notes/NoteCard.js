import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/postActions';

const NoteCard = ({ notesFR, deleteNote }) => {
    const noteList = notesFR.length ? (
        notesFR.map((note) => {
            return (
                <div className='col-4' key={note.id}>
                    <div className="card">
                        <div className="card-body">
                            <Link to={'/' + note.id} style={{ textDecoration: 'none', color: 'black' }}>
                                <h5 className="card-title">{note.title}</h5>
                            </Link>
                            <p className="card-subtitle"> {note.date} </p>
                            <div className="text-right">
                                <button className="btn btn-outline-danger" style={{ marginTop: '20px' }} onClick={() => { deleteNote(note.id) }}>Delete</button>
                            </div>
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
        notesFR: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (id) => { dispatch(deleteNote(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteCard);
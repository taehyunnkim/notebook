import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNote, updateNote } from '../actions/postActions';

class Note extends Component {
    state = {
        title: '',
        content: '',
        id: null, 
        exists: false
    }

    componentDidMount() {
        const id = this.props.match.params.note_id;
        const exists = this.checkNote(id);

        if (exists) {
            const correctNote = this.props.notes.find((note) => {
                return note.id === id;
            });

            this.setState({
                title: correctNote.title,
                content: correctNote.content,
                id: id,
                exists: true
            }, () => {
                document.getElementById("title").value = this.state.title;
                document.getElementById("content").value = this.state.content;
            });
        } else {
            // Creating a new note
            this.setState({
                id: id
            });
        }
    }

    checkNote = (id) => {
        for (let i = 0; i < this.props.notes.length; i++) {
            if (this.props.notes[i].id === id) {
                return true;
            }
        }

        return false;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleCreate = () => {
        this.props.history.push('/notebook');
        if(this.state.exists) {
            this.props.updateNote(this.state);
        } else {
            this.props.addNote(this.state);
        }
    }

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label> Title </label>
                    <input type="text" id="title" className="form-control" onChange={this.handleChange}></input>
                </div>
                <div className="form-group" >
                    <textarea className="form-control" id="content" rows="25" onChange={this.handleChange} />
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-primary" onClick={this.handleCreate} style={{ margin: '20px' }}>Save</button>
                    <button className="btn btn-outline-danger" onClick={() => { this.props.history.push('/notebook') }} style={{ margin: '20px' }}>Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (newNote) => { dispatch(addNote(newNote)) },
        updateNote: (updatedNote) => { dispatch(updateNote(updatedNote)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Note);
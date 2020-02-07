import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addNote } from '../actions/postActions';


class Note extends Component {
    state = {
        title: '',
        content: '',
        id: null
    }

    componentDidMount() {
        let id = this.props.match.params.note_id;

        // const correctNote = this.props.notes.find((note) => {
        //     return note.id === id;
        // });

        // Creating a new note
        this.setState({
            id: id
        }, () => console.log(this.state));

        // this.setState({
        //     title: correctNote.title,
        //     content: correctNote.content,
        //     id: id
        // }, () => {
        //     document.getElementById("textarea").value = this.state.content;
        //     document.getElementById("title").value = this.state.title;
        // });

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleCreate = () => {
        this.props.addNote(this.state);
        this.props.history.push('/notebook');
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
        addNote: (newNote) => { dispatch(addNote(newNote)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Note);
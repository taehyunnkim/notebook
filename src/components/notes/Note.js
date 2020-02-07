import React, { Component } from 'react'
import { connect } from 'react-redux';

class Note extends Component {
    state = {
        title: '',
        content: '',
        id: null
    }

    componentDidMount() {
        let id = this.props.match.params.note_id;
        const correctNote = this.props.notes.filter((note) => {
            return note.id === id;
        })[0];

        this.setState({
            title: correctNote.title,
            content: correctNote.content,
            id: id
        }, () => {
            document.getElementById("textarea").value = this.state.content;
            document.getElementById("title").value = this.state.title;
        });
    }

    render() {
        return (
            <div className = "container">
                <form>
                    <div className = "form-group">
                        <label> Title </label>
                        <input type="text" id = "title" className="form-control"></input>
                    </div>
                    <div className = "form-group" >
                        <textarea className="form-control" id="textarea" rows="25" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}


export default connect(mapStateToProps)(Note);
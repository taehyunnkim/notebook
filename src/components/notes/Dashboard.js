import React, { Component } from 'react'
import Note from "./Note";
import CreateNote from "./CreateNote";

export default class Dashboard extends Component {
    state = {notes: [
        {title: "Note 1", date: 'date 1', content: 'content 1', id: 1}, 
        {title: "Note 2", date: 'date 2', content: 'content 2', id: 2},
        {title: "Note 3", date: 'date 3', content: 'content 3', id: 3},
        {title: "Note 4", date: 'date 4', content: 'content 4', id: 4},
        {title: "Note 5", date: 'date 5', content: 'content 5', id: 5}
    ]}

    addNote = (newNote) => {
        const newList = [...this.state.notes,newNote];
        this.setState({
            notes: newList
        });
    }

    deleteNote = (ID) => {
        const newList = this.state.notes.filter(existingNote => {
            return existingNote.id !== ID;
        });

        this.setState({
            notes: newList
        });
    }

    render() {
        console.log(this.state.notes.length);
        return (
            <div className = "dashboard">
                <Note noteList = {this.state.notes} deleteNote = {this.deleteNote}/>
                <CreateNote addNote = {this.addNote}/>
            </div>
        )
    }
}

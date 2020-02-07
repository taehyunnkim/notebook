import React, { Component } from 'react'
import NoteCard from "./NoteCard";
// import CreateNote from "./CreateNote";

export default class Dashboard extends Component {
    // addNote = (newNote) => {
    //     const newList = [...this.state.notes,newNote];
    //     this.setState({
    //         notes: newList
    //     });
    // }

    // deleteNote = (ID) => {
    //     const newList = this.state.notes.filter(existingNote => {
    //         return existingNote.id !== ID;
    //     });

    //     this.setState({
    //         notes: newList
    //     });
    // }

    render() {
        return (
            <div className = "dashboard">
                <NoteCard deleteNote = {this.deleteNote}/>
                {/* <CreateNote addNote = {this.addNote}/> */}
            </div>
        )
    }
}

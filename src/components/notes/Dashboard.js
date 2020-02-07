import React, { Component } from 'react'
import NoteCard from "./NoteCard";
import CreateNote from "./CreateNote";

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "dashboard">
                <NoteCard />
                <CreateNote />
            </div>
        )
    }
}

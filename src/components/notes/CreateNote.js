import React, { Component } from 'react'

export default class CreateNote extends Component {
    state = {
        title: '',
        date: "today",
        content: '',
        id: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== '') {
            const newId = Math.random();
            this.setState({
                id: newId
            });
            this.props.addNote(this.state);
            this.setState({
                title: '',
                content: ''
            });
        }
    }

    render() {
        return (
            <div className = "create">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" id="title" onChange={this.handleChange} value = {this.state.title}></input>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <input type="text" className="form-control" id="content" onChange={this.handleChange} value = {this.state.content}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create</button>
            </div>
        )
    }
}

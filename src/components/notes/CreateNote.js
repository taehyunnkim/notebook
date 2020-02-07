import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CreateNote extends Component {
    state = {
        id: null
    }

    componentDidMount() {
        let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.setState({
            id: id
        });
    }

    render() {
        return (
            <div className = "text-center">
                <Link to={'/notebook/' + this.state.id}>
                    <button className = "btn btn-primary create"> NEW NOTE </button>
                </Link>
            </div>
        )
    }
}


export default CreateNote;

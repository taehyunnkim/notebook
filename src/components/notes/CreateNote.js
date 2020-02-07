import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CreateNote extends Component {
    state = {
        id: null
    }

    handleClick = () => {
        console.log(this.state.id);
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
                <Link to={'/' + this.state.id}>
                    <button className = "btn btn-primary" style = {{marginTop: "20px"}} onClick={this.handleClick}> NEW NOTE </button>
                </Link>
            </div>
        )
    }
}


export default CreateNote;

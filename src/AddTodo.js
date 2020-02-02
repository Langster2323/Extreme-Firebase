import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add Todo's:</label>
                    <input type="text" id="content" onChange={this.handleChange} />
                </form>
            </div>
            
        )
    }
}

export default AddTodo;
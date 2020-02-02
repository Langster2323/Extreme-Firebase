import React from 'react';

const Todos = ({ todos }) => { 

    const todoList = todos.length ? (
        <div className="todos collection">
            {todos.map(todo => {
                return <div key={todo.id}>{todo.content}</div>
            })}
        </div>
    ) : <p>No todos!</p>
    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos;
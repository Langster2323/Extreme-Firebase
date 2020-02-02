import React from 'react';

const Todos = ({ todos }) => {
    return (
        <div className="todos collection">
            {todos.map(todo => {
                return <div key={todo.id}>{todo.content}</div>
            })}
        </div>
    )
}

export default Todos;
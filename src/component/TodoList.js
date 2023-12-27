import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { useTodoContext } from './TodoContext'

const TodoList = () => {

    const { todos, addTodo, updateTodo, removeTodo, completeTodo } = useTodoContext();
    
    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )

}

export default TodoList;

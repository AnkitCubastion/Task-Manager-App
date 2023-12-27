import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { useTodoContext } from './TodoContext'
import { CiLight, CiDark } from "react-icons/ci";

const TodoList = () => {

    const { todos, addTodo, updateTodo, removeTodo, completeTodo, isDarkMode, toggleDarkMode } = useTodoContext();

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <h1>What's the Plan for Today?</h1>
            <button className='toggle-btn' onClick={toggleDarkMode}>
                {isDarkMode ? <CiLight /> : <CiDark />}
            </button>
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

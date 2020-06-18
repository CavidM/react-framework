import React from 'react';
import TodoFilterComponent from '../../components/todo-filter/todoFilterComponent';
import TodoListComponent from '../../components/todo-list/todoListComponent';

export default function TodoHtml() {

    return (
        <div className="todo-html">
            <TodoFilterComponent/>
            <TodoListComponent/>
        </div>
    );
}
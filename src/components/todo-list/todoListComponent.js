import React, { useEffect } from 'react';
import TodoListHtml from './todoListHtml';
import { getTodos } from '../../actions/todo/todoActions';

export default function TodoListComponent() {

    // useEffect(() => , [])

    return (
        <TodoListHtml/>
    );
}
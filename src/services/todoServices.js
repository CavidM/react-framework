import {todos } from '../http/todoServices';

export const getTodos = async() => {

    let x = await todos();
    
    return x;
}
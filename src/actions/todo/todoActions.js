import { getTodos as s } from '../../services/todoServices';

export const getTodos = async () => {

    let res = await s();

    return res
}
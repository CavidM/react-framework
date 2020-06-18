const axios = require('axios');

export async function todos() {

    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    return res;
}
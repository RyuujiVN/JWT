import instance from '../api/index.js';

export const login = async (data) => {
    const response = await instance.post('/login', data);

    return response
}
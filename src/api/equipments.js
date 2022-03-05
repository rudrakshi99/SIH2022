import axios from './config';

export const getEquips = async () => {
    try {
        return await axios.get('/api/equipment');
    } catch(error) {
        console.log('Error while calling createPost API', error);
    }
}

export const getEquip = async (id) => {
    try {
        return await axios.get(`/api/equipment/${id}`);
    } catch(error) {
        console.log('Error while calling createPost API', error);
    }
}
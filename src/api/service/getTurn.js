import axios from 'axios';

const getTurn = async function () {
    // const response = await axios.get(`http://192.168.1.144:8000/item`);
    const response = await axios.get(`http://localhost:8000/turn`);
    const data = await response.data;
    return data.turn;
};

export default getTurn

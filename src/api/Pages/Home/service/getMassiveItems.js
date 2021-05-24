import axios from 'axios';

const getItemsRequest = async function() {
   const response = await axios.get(`http://10.2.1.142:8000/item`);
   // const response = await axios.get(`http://localhost:8000/item`);
   const data = await response.data;
   return data;
};
export default getItemsRequest
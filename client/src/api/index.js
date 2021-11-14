import axios from 'axios';

const url = 'http://localhost:5000/resis';

export const fetchResis = () => axios.get(url);
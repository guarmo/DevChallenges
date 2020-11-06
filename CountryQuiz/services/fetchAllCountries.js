import api from './api';

export const fetchAllCountries = () => api.get('/all');
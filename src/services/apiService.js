const axios = require('axios');

const getAllApis = async () => {
  try {
    const response = await axios.get('https://api.publicapis.org/entries');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getApi = async (id) => {
  try {
    const response = await axios.get(`https://api.publicapis.org/entries/${id}`);
    if (response.status !== 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createApi = async (apiData) => {
  try {
    const response = await axios.post('https://api.publicapis.org/entries', apiData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateApi = async (id, apiData) => {
  try {
    const response = await axios.put(`https://api.publicapis.org/entries/${id}`, apiData);
    if (response.status !== 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteApi = async (id) => {
  try {
    const response = await axios.delete(`https://api.publicapis.org/entries/${id}`);
    if (response.status !== 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllApis,
  getApi,
  createApi,
  updateApi,
  deleteApi
};

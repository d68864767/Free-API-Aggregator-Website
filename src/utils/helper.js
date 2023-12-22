```javascript
const axios = require('axios');
const constants = require('./constants');

const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status !== constants.HTTP_STATUS_OK) {
      throw new Error(`Error with the request, HTTP status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${url}`, error);
    throw error;
  }
};

const handleApiError = (error, res) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
    res.status(error.response.status).send(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(error.request);
    res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send('Error with the request');
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
    res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send('Unknown error');
  }
};

module.exports = {
  fetchDataFromApi,
  handleApiError
};
```

import axios from 'axios';

const singleRequest = async (url) => {
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const multipleRequests = async (urlArray) => {
  const requests = urlArray.map((url) => {
    return axios.get(url);
  });

  return await axios
    .all(requests)
    .then((response) => {
      return response.map((res) => res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

export { singleRequest, multipleRequests };

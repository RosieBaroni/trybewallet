const url = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

export default apiRequest;

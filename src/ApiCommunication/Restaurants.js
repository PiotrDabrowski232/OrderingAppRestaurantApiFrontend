import axios from 'axios';

const baseURL = "https://orderingapprestaurantapi20241029123756.azurewebsites.net"

const apiClient = axios.create({
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json',  
  }
});

export const getData = async (endpoint) => {
  try {
    const response = await apiClient.get(baseURL+endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(baseURL+endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; 
  }
};

export const updateData = async (endpoint) => {
  try {
    const response = await apiClient.put(baseURL+endpoint);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; 
  }
};

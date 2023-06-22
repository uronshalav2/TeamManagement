// authProvider.js

import axios from 'axios';


const requestData = {
  userName:'uronshala',
  password:'Alive.3112',
  rememberMe:true
}
// Function to authenticate user and retrieve JWT
export const login = async (userName, password, rememberMe) => {
  try {
    const response = await axios.post(`http://localhost:5111/api/Users/login`, requestData, {
      headers:{
      'Content-Type' : 'application/json'
      }
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
  
};

// Function to log out user and remove JWT
export const logout = async () => {
  localStorage.removeItem('token');
   const response = await  axios.post('http://localhost:5111/api/Users/Logout')
   console.log(response);
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};




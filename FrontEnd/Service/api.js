import axios from 'axios';
const url = 'http://localhost:8000';

export const authenticateSignup = async (user) => {
	try {
		return axios.post(`${url}/signup`, user);
	} catch (error) {
		console.log('error while calling Signup api');
	}
};

export const authenticateLogin = async (user) => {
	try {
		return await axios.post(`${url}/login`,user);
	} catch (error) {
		console.log('error while calling login api');
	}
};

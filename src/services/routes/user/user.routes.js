import RequestManager from '@/services/requestManager.service.js';
import {BASE_URL} from '@/services/api.js';

async function Userlogin(userData) {
	const requestManager = new RequestManager(BASE_URL);
	
	const user = {
		email: userData.email,
		password: userData.password,
	};
	const response = await requestManager.sendRequest(
		'/auth/login',
		'POST',
		user
	);
	
	return response;
}

async function GetUserData() {
	const requestManager = new RequestManager(BASE_URL);
	
	const response = await requestManager.sendRequest(
		'/user/me',
		'GET'
	)
	
	return response;
}

async function GetAllUsersFromDbWithPagination(page = 0, limit = 10) {
	const requestManager = new RequestManager(BASE_URL);
	
	try {
		const allUsersPath = `/user/list?page=${page}&limit=${limit}`;
		const response = await requestManager.sendRequest(allUsersPath, "GET");
		
		return response;
	} catch (error) {
		console.error("Login failed", error);
	}
}

export {
	Userlogin,
	GetUserData,
	GetAllUsersFromDbWithPagination
}


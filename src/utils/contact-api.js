import axios from 'axios';


const API_URL = 'http://bluehacks.compsat.org/src/utils/bh_form_handler.php';
// const API_URL = 'http://localhost/bh_form_handler.php';

export {getToken, postContactForm};

function getToken() {	
	return axios.get(API_URL).then(response => response.data);
}

function postContactForm(data) {

	return axios.post(API_URL, data).then(response => response.data);
}

	
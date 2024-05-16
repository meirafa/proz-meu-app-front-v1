const baseURL = "https://servicodados.ibge.gov.br/api/v1/";
const v3URL = "https://servicodados.ibge.gov.br/api/v3";

const fetchAPI = async (url, options = {}) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`Erro: ${response.status} - ${response.statusText}`);
		}
		return await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
};

const fetchV3API = async (url, options = {}) => {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`Erro: ${response.status} - ${response.statusText}`);
		}
		return await response.url;
	} catch (error) {
		throw new Error(error.message);
	}
};

const ibgeService = {
	get: async (endpoint) => {
		return await fetchAPI(`${baseURL}${endpoint}`);
	},
	getV3: async (endpoint) => {
		return await fetchV3API(`${v3URL}${endpoint}`);
	}
};

export default ibgeService;
import axios from 'axios'

const BASE_URL =
	'https://ca6d-2402-3a80-6a3-bc48-7ac6-6816-bc96-956e.ngrok.io/api'
const API_KEY =
	'7f961b76cbddff9394f599c3f91e27c3db966c0c8ee0aea8539f4bced663cf0d22a5c99061d92ca45987a0560f91d571aa5f4365a2743de78c46a52310cb08222bd885239a13707fa377e139d3bfccedbaaa16cb295b8f08ea76552664c8d4d7168e7895ef134d82e684074ec5742666d5fa4a1b681051f81befcb9a65a21dc9'

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/x-www-form-urlencoded',
		Accept: 'application/json',
	},
})

const getSlider = () => axiosInstance.get('/sliders?populate=*')

const getCategories = () => axiosInstance.get('/categories?populate=*')

const getPremiumHospitals = () =>
	axiosInstance.get('/hospitals?filters[Premium][$eq]=true&populate=*')

const getHospitalsByCategory = (category) =>
	axiosInstance.get(
		`/hospitals?filters[categories][Name][$in]=${category}&populate=*`
	)

export default {
	getSlider,
	getCategories,
	getPremiumHospitals,
	getHospitalsByCategory,
}

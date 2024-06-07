import axios from 'axios'

const expoPublicAPIUrl = await fetch(
	'https://medico-auth-repo.vercel.app/api/hello'
)
	.then((res) => res.json())
	.then((data) => data.expoPublicAPIUrl)

const apiKey = await fetch('https://medico-auth-repo.vercel.app/api/hello')
	.then((res) => res.json())
	.then((data) => data.expoPublicAPIKey)

// const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/api`
// const API_KEY = process.env.EXPO_PUBLIC_API_KEY

const BASE_URL = `${expoPublicAPIUrl}/api`
const API_KEY = apiKey

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

const getSlider = () => axiosInstance.get('/sliders?populate=*')

const getCategories = () => axiosInstance.get('/categories?populate=*')

const getPremiumHospitals = () =>
	axiosInstance.get('/hospitals?filters[Premium][$eq]=true&populate=*')

const getHospitalsByCategory = (category, searchText = '') =>
	axiosInstance.get(
		`/hospitals?filters[categories][Name][$in]=${category}&filters[Name][$containsi]=${searchText}&populate=*`
	)

const getAllHospitals = (searchText = '') =>
	axiosInstance.get(
		`/hospitals?populate=*&filters[Name][$containsi]=${searchText}`
	)

const getDoctorsByCategory = (category, searchText = '') =>
	axiosInstance.get(
		`/doctors?filters[categories][Name][$in]=${category}&filters[Name][$containsi]=${searchText}&populate=deep`
	)
const getAllDoctors = (searchText) =>
	axiosInstance.get(
		`/doctors?filters[Name][$containsi]=${searchText}&populate=deep`
	)

const createAppointment = (data) => axiosInstance.post('/appointments', data)

const getUserAppointments = (email) =>
	axiosInstance.get(`/appointments?filters[Email][$eq]=${email}&populate=*`)

export default {
	getSlider,
	getCategories,
	getPremiumHospitals,
	getHospitalsByCategory,
	getAllHospitals,
	getDoctorsByCategory,
	getAllDoctors,
	createAppointment,
	getUserAppointments,
}

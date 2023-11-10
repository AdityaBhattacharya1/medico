import axios from 'axios'

const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/api`
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

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

const getHospitalsByCategory = (category) =>
	axiosInstance.get(
		`/hospitals?filters[categories][Name][$in]=${category}&populate=*`
	)

const getAllHospitals = (searchText = '') =>
	axiosInstance.get(
		`/hospitals?populate=*&filters[Name][$containsi]=${searchText}`
	)

const getDoctorsByCategory = (category) =>
	axiosInstance.get(
		`/doctors?filters[categories][Name][$in]=${category}&populate=deep`
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

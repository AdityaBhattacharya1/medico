const { default: axios } = require('axios')
const doctorsData = require('./data/doctors.json')
const hospitalsData = require('./data/hospitals.json')
const dotenv = require('dotenv').config()

// const expoPublicAPIUrl = setInterval(
// 	async () =>
// 		await fetch('https://medico-auth-repo.vercel.app/api/hello')
// 			.then((res) => res.json())
// 			.then((data) => data.expoPublicAPIUrl),
// 	1000
// )

const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/api`
const API_KEY = process.env.EXPO_PUBLIC_API_KEY
// const BASE_URL = `${expoPublicAPIUrl}/api`

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

for (let i = 0; i < doctorsData.length; i++) {
	axiosInstance.post('/doctors', { data: doctorsData[i] })
}

for (let i = 0; i < hospitalsData.length; i++) {
	axiosInstance.post('/hospitals', { data: hospitalsData[i] })
}

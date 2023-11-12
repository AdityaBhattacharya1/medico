// returns
//	{
// 	res: time in AM/PM,
// 	time: {
// 		hoursOfTime: numeric form of the hours of time,
// 		minutesOfTime: numeric form of the minutes of time
// 	}
// }
export const formatTime = (time) => {
	let hoursOfTime = time && time.slice(0, 2)
	let minutesOfTime = time && time.slice(3, 5)
	hoursOfTime = parseInt(hoursOfTime)
	minutesOfTime = parseInt(minutesOfTime)
	let res = `${time.slice(0, -7)} ${hoursOfTime >= 12 ? 'PM' : 'AM'}`
	return { res, time: { hoursOfTime, minutesOfTime } }
}

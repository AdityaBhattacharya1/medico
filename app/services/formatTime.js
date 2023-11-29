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
	let timeStr = new Date()
	timeStr.setHours(hoursOfTime)
	timeStr.setMinutes(minutesOfTime)
	let res = timeStr.toLocaleString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	})
	return { res, time: { hoursOfTime, minutesOfTime } }
}

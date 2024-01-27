function convertTo24HrsFormat(time) {
	// write your solution here
// 	console.log(time)
	let final_time;
	let hour,minute;
	if(time.endsWith("AM")){
       let time_arr = time.split(/[:AM]+/)
       console.log(time_arr)
	   if (time_arr[0] == '12'){
		hour ="00"
	   }
	   else{
		hour = '0'+ time_arr[0]
	   }
       console.log(hour)
	   minute = time_arr[1]
	   final_time = `${hour}:${minute}`
	   console.log(final_time)
	}
	else{
		let time_arr = time.split(/[:PM]+/)
		if(time_arr[0] !== "12"){
		    console.log(time_arr[0])
           hour = String(12 + Number(time_arr[0]))
		}
		else{
			hour = time_arr[0]
		}
		minute = time_arr[1]
		final_time = `${hour}:${minute}`

	}

	return final_time;
}
console.log(`Converted time: ${convertTo24HrsFormat("1:45PM")}`); // Output should be '13:45'
console.log(`Converted time: ${convertTo24HrsFormat("03:45PM")}`); // Output should be '15:45'

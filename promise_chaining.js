/*JavaScript Promise Chaining Lab
Medium
54
4
51.7% Acceptance
In this lab, you will practice using JavaScript Promises in a chain format. You will create two functions - fetchData and processData.

The fetchData function will simulate fetching data using a Promise and do so with a 1-second delay.

The processData function will take this data and process it, once again delaying this operation by 1 second using a Promise.

Your task is to implement the fetchData and processData functions and export the functions correctly and chain them together to produce the final output.
*/
/*
 * Implement your fetchData and processData functions below
 *
 */
 const fetchData = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			// const data = "Sample Data"
			resolve('data fetched!')
		}, 1000)
	})
}
 const processData = (data) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			// const modifiedData =
			resolve(data + ' - processed!')
		}, 1000)
	})
}
/* Do not modify below this line */

const main = async () => {
	try {
		const data = await fetchData()
		const processed = await processData(data)
		console.log(processed)
	} catch (err) {
		console.error('Error Occurred:', err)
	}
}

main()

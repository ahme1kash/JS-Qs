 const sortAscendingByDate = (array) => {
	// Write your code here
	if (array.length==0 || array.length==1){
		return array
	}
	return array.sort((a,b)=>{
        return new Date(a.date) - new Date(b.date)
    })
}
const events = [
    { name: 'Event 1', date: '2022-10-20', location: 'New York' },
    { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
    { name: 'Event 2', date: '2023-02-10', location: 'Paris' },
  ];
  
const sortedEvents = sortAscendingByDate(events);
console.log(sortedEvents)
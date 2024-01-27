const get = (key, object) => {
	// Write your code here
	console.log(object)
	if(typeof object!=='object' || object === null){
		return undefined
	}
	if (key in object){
		return object[key]
	}
	for (let objkey in object){
		let val = get(key,object[objkey])
		if (val!== undefined){
			return val
		}
	}
}

const obj = {
      feb: {

      },
      mar: {

      },
    q2: {
      apr: {

      },
      may: {

      },
      jun: {

      }
    },
    q3: {
      jul: {

      },
      aug: {

      },
      sep: {
        bonuses: [
          //...
        ]
      }
    },
    q4: {
      oct: {

      },
      nov: {
        risk: true
      },
      dec: {

      }
    }
  }
  
  console.log(get("risk",obj))
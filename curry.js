
const curry = function (fn) {
	return function (a) {
		return function(b){
			return function(c){
				return fn(a,b,c)
			}
		}
	}
}
function sum(a, b,c) {
	return a + b + c;
  }
  
  let curriedSum = curry(sum);
  console.log(curriedSum)
// export default curry

const conclusion = `
Objects return based function

map -
	it will return an array which contains whatever you returned from predicate
		predicate: (element,index) => { return element.props }
find -
	It will return an object / element which at first occurence.
		predicate: (element,index) => { return element.props === 'deciding factor'}
filter -
	It will return an array which contains all the element which return true in predicate
		predicate: (element,index) => { return element.props === deciding factor}

boolean return based function
some -
	it will return true if one or more element return true in predicate function.
		predicate: (element) => { return element.props === deciding_factor }
every -
	It will return true if & only if all elements return true in predicate function.
		predicate: (element) => { return element.props === deciding_factor }
	
includes -
	It will return true if given element found in array
	syntax:
		arr.includes("blah blah");

Numeric Return based function

indexOf - You know common on

findIndex - It used when array contains objects and we have to pass predicate function
			eg:
				let indexOfObject_Present_In_Array = arr.findIndex((element)=>{
					return element.props === deciding_factor
				});



`;

console.log(conclusion);

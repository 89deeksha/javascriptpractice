function add(){
	console.log(arguments)
}
add(1,2)
add(3,6,5,7)

function addition(){
	if(arguments.length==0){
		console.log("Arguments not passed yet!")
	}else
	{
		let sum=0;
    for(let i=0; i<arguments.length; i++){
		sum=sum+arguments[i];

	}
	console.log(sum)
	}
}
let person={ //object
	firstName:'Deeksha',
	lastName:'Jain',
	hobby:'sing',
};
console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
person.age='21';
console.log(person)
console.log(person.height) //check values whether these are available or not inside object
console.log('height' in person) //another method to check value of an object available or not, so this is false
console.log('age' in person) //this is true
console.log(person)
person.height='20ft';
console.log(person)
delete person.height
console.log(person)
//how to get all keys in ones
for(let key in person){ //in is operator used for iteration in for loop
console.log(key)
}
for(let key in person){
console.log(key +":" +person[key]) //for access values from object
}

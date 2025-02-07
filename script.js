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
//Action or method
person.greet=function(){
	console.log('hello')
}
person.greet(); //now the object is ready to say hello
//Another way to perform action
function greetings(){
	console.log("helllo!")
}
person.fun=greetings;
person.fun();
let cars={
	brand:'TATA',
	model:'Safari'
}
let people={
	name:'Robert', //property
	Age:'21', //property
	Car(){console.log(people.name +' have'+" "+cars.brand+'with model'+cars.model) //methods
	}
}
people.Car()

let num=Math.floor(Math.random()*10) //this will show numbers from 0-9 
console.log(num)
function getRandom(min, max){
	let x=Math.floor(Math.random()*(max-min))
	return x;
}
getRandom(3,10)
var books={
	name:"science",
	auther:"sp verma",
	set modifyname(n){
this.name=n.toUpperCase();
	}
}
books.modifyname='deeksha jain'
console.log(books)
//constructor function
function student(cls,age,name,surname){
	this.firstName=name,
	this.lastName=surname,
	this.age=age,
	this.class=cls
}
var student1=new student(12,22,"Deeksha","Jain")
var student2=new student(22,20,"Priya","sharma")
console.log(student1,student2)


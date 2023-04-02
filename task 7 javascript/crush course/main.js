// Log a statment using console.log
console.log("hello form javascript file");

// const age = 25;
// const sallary = 0;
// sallary =5200;
// console.log(sallary);

// let sum =0;
// sum = 5;
// console.log(sum);



// data types 
// string data type 
const name ="hazat usman";
const language = "english";

// integer and float data type  
const total = 0;
const pi = 3.4;


// Boolean data tyep 
const isPrimarynumber = true;
const isnewuser = false;
const data = null;

// object data type 
const person = {
    name:"hazrat usamn",
    age:25,
    edcation:"BS Software Engineering",
    address:"peshawar"
};
console.log(person.name)


// Array 
const oddnumber = [1,3,5,7,9];
console.log(oddnumber[0]);



// Operators in javascript 
let a = 50;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

console.log(a%b);
console.log(a++);
console.log(++b);

// comparison operator 
console.log(a==b);
console.log(a>=b);
console.log(a<=b);
console.log(a!=b);
console.log(a===b);


// logical operator 
const resutl = a>5 && b<50;
console.log(resutl);

const resutl1 = a>5 || b<50;
console.log(resutl1);


// String Cancatination 
let first_name = "hazrat ";
let last_name ="usman khan";
console.log("your first name is :"+first_name + " and last name is "+last_name);


// type conversion 
console.log(parseFloat(3.045));
console.log(parseInt(3.24));
console.log(String(200));
console.log((500).toString());


// equality operator 
const first = 10;
const second = '10';

console.log(first===second);


// conditional statemens 
let sum =0;
if(sum >0){
    console.log("the value is positive")
}else if (sum<0) {
    console.log("the value is negative")
} else {
    console.log("the value is zero")
}



// switch statment 
const color ='green';
switch(color){
    case "red":
        console.log("the color is red")
        break
    case "white":
        console.log("the color is white")
        break
    case "green":
        console.log("the color is green")
        break
    case "dark":
        console.log("the color is dark");
        break;
   default:
    console.log("Not Found")
}



// Loop 
for(let i=0; i<=20;i++){
    console.log("the number is "+i)
}


let i = 0;
while(i<10){
    i++;
    console.log("the number is "+i)
}

let z =0;
do{
    z++;
    console.log("number :"+z);
}while(z<5);


const numberarray = ['usman','khan','khalid','jani'];
for(num of numberarray){
    console.log("iteration number :"+num)
}



// Functions 
function myfunction(value){
    console.log("Good night "+value);
}

myfunction('usman');
myfunction('osaid');
myfunction('hezar hayat');
myfunction('jani');
myfunction('khalid');

function addition(a,b){
    return a+b;
}
const add = addition(5,10);
console.log(add);
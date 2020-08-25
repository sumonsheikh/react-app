function printNumber(){
    for(let i =0;i<5;i++){
        console.log(i);
    }
   
}

printNumber();

const person={
    name:'sumon',
    walk(){
        console.log("this person can talk in bangla");
    },
    talk(){
        console.log(this);
    }

}
// access object memeber
// let pname=person.name;
console.log(person.walk());
// access object member in another way
console.log(person['name']);
// this keyword

person.talk();

const talk=person.talk;
console.log(talk);
talk();



// normanl Function
const squre =function(num){
    return num*num;
}
console.log(squre(10));

// Arrow function
const squreNum = num1 => num1*num1;
console.log(squreNum(5));

// Apply of arrow function
const jobs = [
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
];

//arrow  function
const activeJob=jobs.filter(job=> job.isActive);
console.log(activeJob);

// map function
const colors=['red','green','blue'];
const items= colors.map(color=> `<li>${color}</li>`);
console.log(items);

// Object destructing
const address={
    street:'',
    city:'',
    country:''
}
// extract the value of the property and set the value within separate variable
const street=address.street;
const city=address.city;
const country=address.country;

// object destrunctin solve the repeat the address keyword 
const {street: st}=address;

// spreed operator 
const first=[1,2,3];
const second=[4,5,6];
const third=[7,8,9];

// simple concatnation with concat function
const combined=first.concat(second);
console.log(combined);
//concat with spreed operator
const combined2=[...first,...second,...third];
console.log(combined2);

// clone the array with spreed operator
const clone=[...first];
console.log(clone);

// concating two object with spreed operator
const firstObj={name:"sumon"};
const secondObj={job:"software engineer"};
const combindeObj={...firstObj,...secondObj,location:"Bangladesh"};
console.log(combindeObj);

//class
class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("person can walk");
    }
}

//inheritance 
class Teacher extends Person{
    constructor(name,degree){
        //to use custom construtor in child class we need to call parent
        //class constructor using super() and pass the value of parrent class
        super(name);
        this.degree=degree;
    }

    teach(){
        console.log('teach');
    }
}
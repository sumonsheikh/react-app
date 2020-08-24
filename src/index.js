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

//simple function
const activeJob=jobs.filter(function(job){return job.isActive;});
console.log(activeJob);

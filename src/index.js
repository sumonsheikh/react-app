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
    talk(){}

}
// access object memeber
// let pname=person.name;
console.log(person.walk());
// access object member in another way
console.log(person['name']);

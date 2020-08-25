import {Person} from './person';
export class Teacher extends Person{
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
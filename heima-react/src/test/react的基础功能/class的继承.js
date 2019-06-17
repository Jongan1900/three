class Person {
    constructor(name, age) {

        this.name = name
        this.age = age
    }
    say(){
        console.log("hahaahah");
    }
}


class People1 extends Person {
}


const p1=new People1("aaa",10)
console.log(p1);
console.log(p1.say);

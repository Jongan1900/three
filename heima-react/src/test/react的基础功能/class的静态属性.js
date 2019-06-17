console.log("okkk");


function Person(name, age) {
    this.name = name,
        this.age = age
}
Person.info ="aaaa"
const p1 = new Person("xx", 13)
Person.prototype.say=function(){
    console.log("我say了");
}
console.log(Person.info );
console.log(p1);
console.log(p1.info);
console.log(p1.say());

class Animal {
    constructor(name,age) {
          this.name=name;
          this.age=age;
          
    };
    static info="eee";
    jiao(){
        console.log("我叫了");
    }	
}
const p2 = new Animal("dd", 3)
console.log(p2);
console.log(p2.jiao());
console.log(p2.info);
console.log(Animal.info);
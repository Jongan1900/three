import $ from 'jquery';



import './css/index.css'
$(function(){
    $("li:odd").css("backgroundColor",()=>{
        return '#'+"adc";
    })
    
    $("li:even").css("backgroundColor",()=>{
        return '#'+"000";
    })
});


class Person{
    static info={
        name:"haha",
        age:17,
    }
}
console.log(Person.info);



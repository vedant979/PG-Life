"use strict";
// while(n<=10){
//     console.log(n*2);
//     n++;
// }
// console.log(n);
// for(let n=1; n<=10; n++){
//     console.log(n*2);
// }
// let n=1;
// do{
//     console.log(n*2);
//     n++;
// }while(n<=10);
// let n=0;
// while(n<=15){
//     if(n/2==0){
//         console.log(" even ");
//     }else{
//         console.log("odd");
//     }
//     n++;
// }
// program to display the sum of natural numbers
// let sum = 0;
// const n = 100

// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);
// program to display the sum of n natural numbers

// function make(a,b,c){
//     a=5;
//     b=[1,2,3,4];
//     c[0]=[1];
// }
// let x=2;
// let y=[3,5,7,9];
// let z=[3,5,7,9];
// let max=make(x,y,z);
// document.write(max);


// let add = function(a,b){
//     let x = a+b;
//     return x;
// }
// let r = add(2,23);
// document.write(r);
// let add = a =>a+a;
// document.write(add(2));
// let add = (x,y)=>x+y;
// let a=5;
// let b=10;
// let action = (x,y,z)=>z(x,y);

// let r= action(a,b,add);
// document.write(r);
// let dog = {
//     breed:'pug',
//     height:'1ft',
//     age:"1 year",
//     display: funciton(){
//         document.write(this.breed + this.height)
//     }

// };

// dog["weight"]="pppp";
// document.write(dog['weight']);


// *************************ways to create objects**************************


// let bike = {
//     company:"kawasaki",
//     model:"Ninja H2R",
//     top_speed: "400 KMPH"

//     // bike.display= function(){
//     //     document.write(this.company + this.model + this.top_speed);
//     // } 
// };
// document.write(bike.company+" "+bike.model+" "+"has a top speed of "+" "+bike.top_speed);


// let bike = new Object();
// bike.company="kawasaki";
// bike.model="Ninja H2R";
// bike.top_speed= "400 KMPH";
// bike.display=function() {
//     document.write(this.company + this.model + this.top_speed);
// };


// document.write(bike.company+" "+bike.model+" "+"has a top speed of "+" "+bike.top_speed);


// function bike(company, model, top_speed){
//     this.company = company;
//     this.model = model;
//     this.top_speed = top_speed;
// }
// let bike1 = new bike("kawasaki", "H2R", "400KMPH");
// // document.write(bike1.company+" "+bike1.model+" "+"has a top speed of "+" "+bike1.top_speed);

// for(let prop in bike1){
//     document.write(prop+" "+bike1[prop]+ "<br>");
// }

//  class obj{
//      constructor(make, model, processor, RAM){
//          this.make = make;
//          this.model = model;
//          this.processor = processor;
//          this.RAM = RAM;
//      }
//  }
//  let obj1 = new obj("Dell", "Inspiron 5558", "Core i7", "8 GB");
//  document.write("Specification: "+obj1.processor+" "+ obj1.RAM);
//  obj1.display();

// "use strict";

// class students{
//     constructor(name, sclass, rollno){
//         this.name = name;
//         this.sclass = sclass;
//         this.rollno = rollno;
//     }
// }

// let std = new students("David Rayy", "VI", 12);


// delete std.rollno;
// length.std;

// const class1 = ["ramesh", "suresh", "rajuu"];
// class1.push("Bhagwat");
// document.write(class1);

// class1.pop();
// document.write(class1);

// class1.forEach(function(a){
//     document.write(a+" ");
// });
// let a = function(elements){
//     document.write(elements+" ");
// }
// class1.forEach(a);

// class1.forEach((element)=>{
//     document.write(element+" ");
// });

// function square(...args){
//     let sum = 0;
//     args.forEach(function(element){
//         sum+=element;
//     });
//     return sum;
// }
// let s = square(1,2,3,4);
// document.write(s+" ");
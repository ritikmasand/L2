// class vehicle {
// private name : string
// private modelYear:number

// set Name(_name){
//     this.name=_name
// }
// get Name(){
//     return this.name
// }
// set Year(_Modelyear){
//  this.modelYear=_Modelyear
// }
// get Year(){
//     return this.modelYear
// }
// constructor(){}
// getdetails(){
// console.log(`Name of the car is ${this.name}.Model year is : ${this.modelYear}`);
// }
// }
// class car extends vehicle{
//     noofseats:number
// getdetails(): void {
//     console.log(`Name of the car is ${this.Name}.Model year is : ${this.Year} no of seats are ${this.noofseats}`);
    
// }
// }
// const v = new vehicle()
// v.Name='tata'
// v.Year=2020
// v.getdetails()

// const c=new car()
// c.Name='suzuki'
// c.Year=1999
// c.noofseats=12
// c.getdetails()

class Animal {
    speak(){
        console.log('speak'); 
    }
}
class dog extends Animal{
    speak(){
        console.log('speak , dog edition');       
    }
}
let a=new Animal()
a.speak()
let b=new dog()
b.speak()
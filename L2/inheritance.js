// class vehicle {
// private name : string
// private modelYear:number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.speak = function () {
        console.log('speak');
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.speak = function () {
        console.log('speak , dog edition');
    };
    return dog;
}(Animal));
var a = new Animal();
a.speak();
var b = new dog();
b.speak();

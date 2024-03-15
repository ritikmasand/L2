var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return calculator;
}());
var cal = new calculator();
console.log(cal.add('1', '2'));

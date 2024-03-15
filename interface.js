var child = /** @class */ (function () {
    function child() {
    }
    child.prototype.amount = function (a) {
        console.log(a);
    };
    child.prototype.name = function (b) {
        console.log(b);
    };
    return child;
}());
var c = new child();
c.amount(10);
c.name('ritik');

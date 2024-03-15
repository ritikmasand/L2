function fn(tup) {
    if (tup[1] < 3000) {
        return 'less than 3000';
    }
    if (tup[1] > 6000) {
        return 'less than 3000';
    }
    else {
        return "greater thab 6000";
    }
}
var tup;
tup = ['ritik', 4000];

console.log(fn(tup));
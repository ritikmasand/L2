// let isact: boolean = true
// // console.log(isact);
// let total: number = 12
// // total=123
// let fname: string = '33'
// let array: any[] = [1, 2, 3, true]
// let numbers: [boolean, number] = [true, 1]
// enum def {
//     tobeschedueld, inprogress, completed, wow
// }
// let abc = def
// abc.completed
// let result;
// result = 10 + 'snas'
// export type UserProfile = [name: string, age: number, premium: boolean];
// let user1: UserProfile =  ["Alice", 28, true]
// // Function to return user profile
// export function printUserProfile(profile: UserProfile): string {
//   const [name, age, premium] = profile;
//   return `Name: ${name}, Age: ${age}, Premium: ${premium ? 'Yes' : 'No'}`;
// }
function fn(data) {
    var sum = 0;
    var result = [0, 0];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (typeof item === 'number') {
            sum += item;
        }
        else {
            result[1]++;
        }
    }
    result[0] = sum;
    return result;
}
var inarray = [10, 20, '30', 40];
var outarray = fn(inarray);
console.log(outarray);

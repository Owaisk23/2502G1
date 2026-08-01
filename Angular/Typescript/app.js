console.log("Welcome in Typescript");
var staff = [
    [0, "Hassan", "hassan@gmail.com", "CAH"],
    [1, "Ali", "ali@gmail.com"],
    [2, "Saad", "saad@gmail.com"],
    [3, "Owais", "owais@gmail.com", "Manager Academics"]
];
var payStubs = [
    [staff[0], 300],
    [staff[1], 250, 300],
    [staff[2], 300, 400, 250],
];
// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1]
//300       +   250          +  300   
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
//                         //300         +   400
var monthThreePayments = payStubs[2][3];
//
// console.log(monthOnePayments)
// console.log(monthTwoPayments)
console.log(monthThreePayments);

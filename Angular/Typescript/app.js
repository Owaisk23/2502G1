console.log("Welcome in Typescript");
var userName = "Owais Ahmed Khan";
// console.log("User Name: " + userName);
var userAge = 25;
// console.log("User Age: " + userAge);
var userEmail = "owais_ahmed@aptechnorth.edu.pk";
// console.log("User Email: " + userEmail);
// let userDetails = `Name: ${userName}, Age: ${userAge}, Email: ${userEmail}`;
// console.log(userDetails);
// Null= false       True=1 False=0
var userId = null;
if (userId) {
    console.log("User Id is true");
}
else {
    console.log("User Id is false");
}
// undefined= false       True=1 False=0
var userPost = undefined;
if (userPost) {
    console.log("User Post is true");
}
else {
    console.log("User Post is false");
}
//ARRAYS
var userNames = ["Hamza", "Haris", "Abdullah", "Anas"];
console.log("User Names: " + userNames);
//map method
var userNamesMap = userNames.map(function (val) {
    return val.toLowerCase();
});
//forEach method
userNames.forEach(function (val) {
    console.log("User Name: " + val);
});
console.log("User Names Map: " + userNamesMap);
var userDetails = {
    name: "Owais Ahmed Khan",
    age: 25,
    email: "owais_ahmed@aptechnorth.edu.pk"
};
console.log(userDetails);

console.log("Welcome in Typescript");

let userName: string = "Owais Ahmed Khan";
// console.log("User Name: " + userName);

let userAge: number = 25;
// console.log("User Age: " + userAge);

let userEmail: string = "owais_ahmed@aptechnorth.edu.pk";
// console.log("User Email: " + userEmail);

// let userDetails = `Name: ${userName}, Age: ${userAge}, Email: ${userEmail}`;
// console.log(userDetails);

// Null= false       True=1 False=0

let userId = null;

if(userId) {
    console.log("User Id is true");
} else {
    console.log("User Id is false");
}

// undefined= false       True=1 False=0

let userPost = undefined;

if(userPost) {
    console.log("User Post is true");
} else {
    console.log("User Post is false");
}

//ARRAYS

let userNames: string[] = ["Hamza", "Haris", "Abdullah", "Anas"];
console.log("User Names: " + userNames);

//map method
let userNamesMap = userNames.map((val) => {
    return val.toLowerCase();
});

//forEach method
userNames.forEach((val) => {
    console.log("User Name: " + val);
});

console.log("User Names Map: " + userNamesMap);

let userDetails: any = {
    name: "Owais Ahmed Khan",
    age: 25,
    email: "owais_ahmed@aptechnorth.edu.pk"
};

console.log(userDetails)
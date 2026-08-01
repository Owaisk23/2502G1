console.log("Welcome in Typescript");

// let userName: string = "Owais Ahmed Khan";
// // console.log("User Name: " + userName);

// let userAge: number = 25;
// // console.log("User Age: " + userAge);

// let userEmail: string = "owais_ahmed@aptechnorth.edu.pk";
// // console.log("User Email: " + userEmail);

// // let userDetails = `Name: ${userName}, Age: ${userAge}, Email: ${userEmail}`;
// // console.log(userDetails);

// // Null= false       True=1 False=0

// let userId = null;

// if(userId) {
//     console.log("User Id is true");
// } else {
//     console.log("User Id is false");
// }

// // undefined= false       True=1 False=0

// let userPost = undefined;

// if(userPost) {
//     console.log("User Post is true");
// } else {
//     console.log("User Post is false");
// }

// //ARRAYS

// let userNames: string[] = ["Hamza", "Haris", "Abdullah", "Anas"];
// console.log("User Names: " + userNames);

// //map method
// let userNamesMap = userNames.map((val) => {
//     return val.toLowerCase();
// });

// //forEach method
// userNames.forEach((val) => {
//     console.log("User Name: " + val);
// });

// console.log("User Names Map: " + userNamesMap);

// let userDetails: any = {
//     name: "Owais Ahmed Khan",
//     age: 25,
//     email: "owais_ahmed@aptechnorth.edu.pk"
// };

// console.log(userDetails)

// let userMarks = [78, 85, 88, 75, 56, 65];
// userMarks.push(100); // end me add krdega
// userMarks.pop(); // remove last element

// userMarks.unshift(100); // start me add krdega
// userMarks.shift(); // remove first element

// console.log("User Marks: " + userMarks);
// userMarks.forEach((val) => {
//     console.log("User Mark: " + val);
// });
// userMarks.map((val) => {
//     console.log("User Mark: " + val);
// });

// let mixed: (string | number) [];

// mixed = ["Owais", 25, "Ahmed", 30, "Khan", 35];

// mixed.forEach((val) => {
//     // console.log("Mixed Value: " + val);
//     if(typeof val === "string") {
//         console.log(`String Upper Case: ${val.toUpperCase()}`)
//     } else if(typeof val === "number") {
//         console.log(`Number Square: ${val * val}`)
//     }
// });

// //ALIASED object type

// type Std = {
//     name: string,
//     age: number,
//     isActive: boolean
// }


// let stdDetails: Std = {
//     name: "Hamza",
//     age: 22,
//     isActive: true
// }

// console.log("Student Details: " + stdDetails.name + ", " + stdDetails.age + ", " + stdDetails.isActive);
// console.log(stdDetails["age"]);

//Interfaces

// interface Manager {
//     name: string;
//     salary?: number;
// }

// let storeManager: Manager = {
//     name: "Haris Naseer",
//     salary: 50000
// }

// // Intersection Types
// interface Teacher {
//     teacherId: number,
//     teacherName: string
// }

// interface Student {
//     stdId: number,
//     stdName: string
// }

// type intersectionType = Teacher & Student;

// let intersectionObj: intersectionType = {
//     teacherId: 1,
//     teacherName: "Owais Ahmed Khan",
//     stdId: 1,
//     stdName: "Jaffery"
// }

// console.log("Intersection Object: " + intersectionObj.teacherName + ", " + intersectionObj.stdName);




// enum Color {Red, Green, Blue};

// var c: Color = Color.Blue;
// console.log(c)

// enum Color1 {Red = 5, Green, Blue}
// // //              // 0       1      2 
// //             // 1        2       3
// var colorName: string = Color1[7]
// console.log(colorName)

// // // assigning number of your choice to enum
// enum Color2 {Red = 2, Green = 4, Blue = 7, Cyan = 8}

// var colorName: string = Color2[7]
// console.log(colorName)   

// Tuple types have advantages that you can accurately describe the type of an array

// var tuple: [number, string] = [1, "Bob"];
// // var scndElement = tuple[1]
// // console.log(scndElement)
// // console.log(tuple[1])

// In JS
// const failingResponse = ["Non Found", 404]
// //  In TS
// const passingResponse: [string, number] = ["{}", 200]

// if(passingResponse[1] === 200){
//     const localInfo = JSON.parse(passingResponse[0])
//     console.log(localInfo)
// }


type staffAccount = [number, string, string, string?]

const staff: staffAccount[] = [
    [0, "Hassan", "hassan@gmail.com", "CAH"],
    [1, "Ali", "ali@gmail.com"],
    [2, "Saad", "saad@gmail.com"],
    [3, "Owais", "owais@gmail.com", "Manager Academics"]
];

type PaySTubs = [staffAccount, ...number[]];

const payStubs: PaySTubs[] = [
    [staff[0], 300],
    [staff[1], 250, 300],
    [staff[2], 300, 400, 250],
];

// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1]
                            //300       +   250          +  300   
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
//                         //300         +   400
const monthThreePayments = payStubs[2][3];
//

// console.log(monthOnePayments)
// console.log(monthTwoPayments)
console.log(monthThreePayments)









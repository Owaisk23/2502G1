// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

using System.Collections;
using System.Runtime.Versioning;

string Victory = "Iran";
string Defeat = "USA";

Console.WriteLine(Victory + " Defeated " + Defeat);

//// DATATYPES

//byte age = 25;

////short salary = 32000;

//int price = 7200;

//long largeNum = 2678358359834593475L;

//float marks = 88.45F;

//double dNum = 321.21D;

//// String Datatypes

//char grade = 'A';

//string area = "North Nazimabad";

//// Boolean

//bool isValid = true;

//// Concat
////Console.WriteLine("Age is " + age + " salary is " + salary);

////Arithematic operators

//int a = 56;
//int b = 23;

//Console.WriteLine(a + b);
//Console.WriteLine(a - b);
//Console.WriteLine(a * b);
//Console.WriteLine(a / b);
//Console.WriteLine(a % b);

//// Assignment Operators

//int c = 10;

//Console.WriteLine(c += 5); //c = c + 5
//Console.WriteLine(c -= 5); //c = c - 5
//Console.WriteLine(c *= 5); //c = c * 5
//Console.WriteLine(c /= 5); //c = c / 5
//Console.WriteLine(c %= 5); //c = c % 5

//// Comparsion Operators
//Console.WriteLine(a == b);
//Console.WriteLine(a > b);
//Console.WriteLine(a < b);
//Console.WriteLine(a != b);
//Console.WriteLine(a <= b);
//Console.WriteLine(a >= b);

//// Logical Operators
////AND &&
//// T T == T a=56 b=23
//Console.WriteLine(a > b && a <= b); //False
////OR || T F == T
//Console.WriteLine(a > b || a <= b); //True
////NOT !
//Console.WriteLine(!(a == b)); // True


//// SALARY SYSTEM
//Console.WriteLine("Enter Salary..");

//int salary = Int32.Parse(Console.ReadLine());

//if (salary > 50000 && !(salary >= 80000))
//{
//    Console.WriteLine("Good salary...");
//}
//else if (salary < 50000)
//{
//    Console.WriteLine("Do you get fuel allowance?");
//    string answer = Console.ReadLine();

//    answer = answer.ToLower();// yes  or y

//    if (answer == "yes" || answer == "y")
//    {
//        Console.WriteLine("Sounds Goood!!");
//    }
//    else if (answer == "no" || answer == "n")
//    {
//        Console.WriteLine("Try to switch your job ASAP!!");
//    }
//    else
//    {
//        Console.WriteLine("Please enter yes or no.");
//    }
//}
//else
//{
//    Console.WriteLine("Great!! MASHALLAH");
//}

////SWITCH CASE


//Console.WriteLine("Enter number for days..");

//int number = Convert.ToInt32(Console.ReadLine());

//switch(number)
//{
//    case 1:
//        Console.WriteLine("Monday");
//        break;
//    case 2:
//        Console.WriteLine("Tuesday");
//        break;
//    case 3:
//        Console.WriteLine("Wednesday");
//        break;
//    case 4:
//        Console.WriteLine("Thursday");
//        break;
//    case 5:
//        Console.WriteLine("Friday");
//        break;
//    case 6:
//        Console.WriteLine("Saturday");
//        break;
//    case 7:
//        Console.WriteLine("Sunday");
//        break;
//}

//// loops
//int table = 5;

//for(int i = 0; i <= 10; i++)
//{
//    Console.WriteLine(table * i);
//}

////Odd Num

//for (int i = 0; i <= 101; i++)
//{
//    if(i%2 == 0)
//    {
//        Console.WriteLine(i);
//    }
//}

////while
//int c = 5;

//while(c > 22)
//{
//    Console.WriteLine("U");
//    c++;
//}

////do-while

//int j = 15;

//do
//{
//    Console.WriteLine("J");
//} while (j > 23);

//char ans;
//do
//{
//    Console.WriteLine("Enter Salary..");

//    int salary = Int32.Parse(Console.ReadLine());

//    if (salary > 50000 && !(salary >= 80000))
//    {
//        Console.WriteLine("Good salary...");
//    }
//    else if (salary < 50000)
//    {
//        Console.WriteLine("Do you get fuel allowance?");
//        string answer = Console.ReadLine();

//        answer = answer.ToLower();// yes  or y

//        if (answer == "yes" || answer == "y")
//        {
//            Console.WriteLine("Sounds Goood!!");
//        }
//        else if (answer == "no" || answer == "n")
//        {
//            Console.WriteLine("Try to switch your job ASAP!!");
//        }
//        else
//        {
//            Console.WriteLine("Please enter yes or no.");
//        }
//    }
//    else
//    {
//        Console.WriteLine("Great!! MASHALLAH");
//    }
//    Console.WriteLine("Do you want to continue press Y");
//    ans = Convert.ToChar(Console.ReadLine());
//} while (ans == 'Y' || ans == 'y');

//Array with FIXED SIZE

//int[] Scores = new int[7];
//Scores[0] = 77;
//Scores[1] = 57;
//Scores[2] = 78;
//Scores[3] = 90;
//Scores[4] = 54;
//Scores[5] = 45;
//Scores[6] = 67;
////Scores[7] = 87;
////Scores[8] = 87;

//Console.WriteLine(Scores[4]);

//string[] cars = ["Civic", "Carolla", "BMW", "Boss", "Sportage", "BMW", "Liana"];
////Console.WriteLine(cars[0]);
////Array.Sort(cars);
////Array.Reverse(cars);

//foreach (var car in cars)
//{
//    Console.WriteLine(car);
//}

////Console.WriteLine(Array.IndexOf(cars, "BMW"));
////Console.WriteLine(Array.LastIndexOf(cars, "BMW"));

////MultiDimentional Array

//int[,] oldNewPrice =
//{
//    {80, 150 },
//    {180, 250 },
//    {800, 950 },
//    {950, 1000 },
//    {1380, 1500 },
//};


//Console.WriteLine(oldNewPrice[3,0]);

//for(int i = 0; i < oldNewPrice.GetLength(0); i++)
//{
//    for(int j = 0;  j < oldNewPrice.GetLength(1); j++)
//    {
//        Console.WriteLine(oldNewPrice[i, j]);
//    }
//}

//Jagged  Array: Size of sub array is not fixed

//string[][] skillSet =
//{
//    new string[3] {"HTML", "CSS", "JS"},
//    new string[4] {"Wordpress", "MySQL", "PHP", "Laravel"},
//    new string[2] {"SQL SERVER", "DotNET"},
//    new string[4] {"MongoDB", "React", "ExpressJS", "FSA"},
//    new string[2] {"DART", "Flutter"},
//};

//Console.WriteLine(skillSet[1][2]);

//for(int i = 0;  i < skillSet.Length; i++)
//{
//    for(int j = 0;  j < skillSet[i].Length; j++)
//    {
//        Console.WriteLine(skillSet[i][j]);
//    }
//}

//foreach (var skill in skillSet)
//{
//    foreach (var skills in skill)
//    {
//        Console.WriteLine(skills);
//    }
//}

//Functions
//syntax returntype funcName() {body}

// No return no parameter

//void Greet()
//{
//    Console.WriteLine("Good Evening!");
//}

//calling
//Greet();
//Greet();
//Greet();
//Greet();


// No return with parameter

//void Greet(string name)
//{
//    Console.WriteLine($"{name} Good Evening!");
//}

////calling
//Greet("Usama");
//Greet("Haris");

//// Return with No Parameter

//string Greet()
//{
//    return "HI, welcome to Aptech North Nazimabad!";
//}
////Greet();
//Console.WriteLine(Greet());

//string messg = Greet();
//Console.WriteLine($"Greet {messg.ToUpper()}");

//float stdWeight()
//{
//    return 67.55F;
//}

//Console.WriteLine(stdWeight());


//RETURN WITH PARAMETER

//string empDetails(string empName, int salary)
//{
//    return ($"Employee name is {empName} & salary is {salary}");
//}


//string messg = empDetails("Taha", 42000);
//Console.WriteLine(messg);

//Data Structures
//Generic Collections
//LIST, STACK, QUEUE, DICTIONARY

//using System.Collections;
//using System.Linq;


//List<string> SuperCars = new List<string>();

//SuperCars.Add("Supra");
//SuperCars.Add("Bugatti");
//SuperCars.Add("Ferarri");
//SuperCars.Add("Rx8");


//List<string> Cars = new List<string>();

//Cars.Add("Boss");
//Cars.Add("MG");
//Cars.Add("BMW");
//Cars.Add("Haval");
//Cars.Add("Accord");
//Cars.Add("Civic");

//Console.WriteLine(Cars[0]);
////Console.WriteLine(Cars[1]);
////Console.WriteLine(Cars[2]);
////Console.WriteLine(Cars[3]);

//Console.WriteLine(Cars.Contains("Boss")); // T/F

//Cars.Insert(1, "Revo");

//Console.WriteLine(Cars[1]);

//Cars.AddRange(SuperCars);
//Cars.RemoveRange(2, 5);


//foreach (var car in Cars)
//{
//    Console.WriteLine(car);
//}

//Queue (FIFO: First In First Out)
//Enqueue = Add
//Dequee = Remove

//Queue<string> empName = new Queue<string>();

//empName.Enqueue("Hassan");
//empName.Enqueue("Anas");
//empName.Enqueue("Haris");
//empName.Enqueue("Qadir");
//empName.Enqueue("Hamza");

//empName.Dequeue(); //Hassaan
//empName.Dequeue(); //Anas

//foreach (var item in empName)
//{
//    Console.WriteLine(item);
//}

////Stack(LIFO: Last In First Out)

//Stack<string> fruits = new Stack<string>();
//fruits.Push("Apple");
//fruits.Push("Grapes");
//fruits.Push("Mango");
//fruits.Push("Banana");
//fruits.Push("Kiwi");


//fruits.Pop();
//fruits.Pop();

//foreach (var item in fruits)
//{
//    Console.WriteLine(item);
//}
//Generic Collection
//Dictionary<string, string> empDetails = new Dictionary<string, string>();

//empDetails.Add("empName", "Hassaan");
//empDetails.Add("empDesignation", "Softwarea Developer");
//empDetails.Add("empAddress", "North Nazimabad");
//empDetails.Add("empEmail", "hassan@gmail");
////empDetails.Add("empValid", true);

////Console.WriteLine(empDetails["empName"]);

//foreach (var item in empDetails)
//{
//    string[] test = (item.ToString()).Split(',');
//    string key = test[0].Trim('[');
//    string value = test[1].Trim(']');
//    //Console.WriteLine(key);
//    //Console.WriteLine(value);
//    Console.WriteLine($"Key is {key} value is {value}");
//    //Console.WriteLine(test);
//}

//Dictionary<string, int> prodPrice = new Dictionary<string, int>();
//prodPrice.Add("Samsung A32", 32000);
//prodPrice.Add("Google Pixel 7A", 52000);
//prodPrice.Add("Infinix Hot 8 Lite", 7000);
//prodPrice.Add("Techno Spark G30", 52000);


//foreach (var item in prodPrice)
//{
//    string[] test = (item.ToString()).Split(',');
//    string key = test[0].Trim('[');
//    string value = test[1].Trim(']');
//    //Console.WriteLine(key);
//    //Console.WriteLine(value);
//    Console.WriteLine($"Mob is {key} price is {value}");
//    //Console.WriteLine(test);
//}

////HashTables (Non-Generic Collection No Fixed dataType)
//Hashtable cars = new Hashtable();
//cars.Add("carName", "Accord CL7");
//cars.Add("carBrand", "Honda");
//cars.Add("carPrice", 2700000);
//cars.Add("Sedan", true);
//cars.Add("carImg", "accord.jpg");

//Console.WriteLine(cars.Contains("carImg"));
//Console.WriteLine(cars["carImg"]);
//Console.WriteLine(cars.ContainsValue(2700000));

//foreach (DictionaryEntry item in cars)
//{
//    Console.WriteLine(item.Key + ": " + item.Value);
//}

//ArrayList(Non Generic Collection & No Fix DT)

//ArrayList arrayList = new ArrayList();
//arrayList.Add("Trees");
//arrayList.Add(32);
//arrayList.Add(11.2f);
//arrayList.Add(false);

//arrayList.RemoveRange(0, 2);
////arrayList.RemoveAt(0);
////arrayList.Remove(32);

//foreach (var item in arrayList)
//{
//    Console.WriteLine(item);
//}

//string test = "we are learning \"C#\"";
//Console.WriteLine(test.Replace("learning", "Mastering"));
//Console.WriteLine(test.Replace("C#", "DOTNET"));
//-------------------------- DS End -----------------------------------------
//What is OOP?
//Best Practices
//Indentation(code readable using spaces new lines)
//meaninful idenfiers (variables name)
//less repeatation
//error(exceptional handling)

//OOP(Object Oriented Programming)
//Object & Classes
//Car accord = new Car("Accord CL7", "Honda best product", 270000);
//accord.carStarts();

//public class Car
//{
//    // properties
//    public string? carName;
//    public string? carDesc;
//    public int carPrice;



//    //constructors
//    public Car(string carName, string carDesc, int carPrice) {
//        this.carName = carName;
//        this.carDesc = carDesc;
//        this.carPrice = carPrice;
//    }

//    //methods
//    public void carStarts()
//    {
//        Console.WriteLine(carName + "start...!");
//    }
//    public void carStops()
//    {
//        Console.WriteLine(carName + "stop...!");
//    }
//}

//OOP
//Objects and Classes
//OOP (OBJECT ORIENTED PROGRAMMING)
//it is an approach to code cleaner and better.
//readable
//reusable
//optimize
//proper structure of the code is maintained.

//Main Pillars of OOP

//1. Interitance
// i . Single level inheritance  Vehicle -> Car
// ii . Multi level inheritance  Vehicle -> Car -> Ecar
// iii. Heirarchical inheritance Vehicle ->Car , Vehicle-> Bike
// iv. Multiple inheritance  
// v. Hybrid inheritance    Vehicle -> CAR , Vehicle -> Car -> Ecar, Car-> Ecar

//2. Polymorphism(Poly: Many, morphism: forms)
// Method Overloading
// Method Overriding

//3. Abstraction
//4. Encapsulation


//Aeroplane Boeing707 = new Aeroplane();//default constructor


//Boeing707.Name = "Boeing 707";
//Boeing707.takeOff();
//Console.WriteLine(Boeing707.AirLine);

//Aeroplane f16 = new Aeroplane("PAF");
//f16.takeOff();

//Aeroplane f17 = new Aeroplane("PAF", "F-17 Thunder", 2, 2, "8500hp");
//f17.takeOff();
//f17.land();

//class ClassNamae{
//default constructor
//parametrized constructor
//methods
//}


//public class Aeroplane
//{
//    //access modifiers: public: access from anywhere, private: access within the class, protected: access within the class + child classes
//    public string? AirLine;
//    public string? Name;
//    public int Seats;
//    public int Crew;
//    public string? Power;

//    //Contstructor
//    public Aeroplane()
//    {
//        this.AirLine = "Not specified";
//        this.Name = "unknown";
//        this.Seats = 0;
//        this.Crew = 0;
//        this.Power = null;
//    }

//    public Aeroplane(string AirLine)
//    {
//        this.AirLine = AirLine;
//        this.Name = "unknown";
//        this.Seats = 0;
//        this.Crew = 0;
//        this.Power = null;
//    }


//    //    //Paremeterized constructor (Overloading)
//    public Aeroplane(string ALine, string name, int seat, int crew, string pow)
//    {
//        this.AirLine = ALine;
//        this.Name = name;
//        this.Seats = seat;
//        this.Crew = crew;
//        this.Power = pow;
//    }
//    public void takeOff()
//    {
//        Console.WriteLine($"{this.Name} is taking off. Best Wishes..!");
//    }
//    public void land()
//    {
//        Console.WriteLine($"{this.Name} is Landing at the 4th runway..! ");
//    }

//}


//2. Polymorphism
// Method Overloading
// Method Overriding
//3. Abstraction
//4. Encapsulation

//Inheritance
//Vehicle abc = new Vehicle("AAZ-789", "Metallic grey");
//abc.Run();

//using System.Collections;
//using System.Linq;

//Car mercedez = new Car("TZ-8908", "Black", "Mercedez", "Benz C-Class", 20000000);
//mercedez.Run();
//mercedez.Run(500);

////// Parent class | Base Class | Super Class
//public class Vehicle
//{
//    public string regNo;
//    public string color;

//    public Vehicle(string regno, string color)
//    {
//        this.regNo = regno;
//        this.color = color;
//    }
//    public void Run()
//    {
//        Console.WriteLine($"{this.regNo} vehicle started running");
//    }
//}
////// Child class | Derived Class | Sub Class
//public class Car : Vehicle
//{

//    public string brand;
//    public string model;
//    public int price;

//    public Car(string regno, string color, string brand, string model, int price) : base(regno, color)
//    {
//        this.brand = brand;
//        this.model = model;
//        this.price = price;
//    }

//    //method overriding
//    public void Run()
//    {
//        Console.WriteLine($"{this.brand} {this.model} {this.regNo} started running");
//    }
//    //method overloading
//    public void Run(int speed)
//    {
//        Console.WriteLine($"{this.brand} {this.model} {this.regNo} started running at {speed} MPH.");
//    }

//}

















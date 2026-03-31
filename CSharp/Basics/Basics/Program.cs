// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");

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

string[] cars = ["Civic", "Carolla", "BMW", "Boss", "Sportage", "BMW", "Liana"];
//Console.WriteLine(cars[0]);
//Array.Sort(cars);
//Array.Reverse(cars);

foreach (var car in cars)
{
    Console.WriteLine(car);
}

//Console.WriteLine(Array.IndexOf(cars, "BMW"));
Console.WriteLine(Array.LastIndexOf(cars, "BMW"));

//MultiDimentional Array





























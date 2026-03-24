// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

string Victory = "Iran";
string Defeat = "USA";

Console.WriteLine(Victory + " Defeated " + Defeat);

// DATATYPES

byte age = 56;

//short salary = 32000;

int price = 7200;

long largeNum = 2678358359834593475L;

float marks = 88.45F;

double dNum = 321.21D;

// String Datatypes

char grade = 'A';

string area = "North Nazimabad";

// Boolean

bool isValid = true;

// Concat
//Console.WriteLine("Age is " + age + " salary is " + salary);

//Arithematic operators

int a = 56;
int b = 23;

Console.WriteLine(a + b);
Console.WriteLine(a - b);
Console.WriteLine(a * b);
Console.WriteLine(a / b);
Console.WriteLine(a % b);

// Assignment Operators

int c = 10;

Console.WriteLine(c += 5); //c = c + 5
Console.WriteLine(c -= 5); //c = c - 5
Console.WriteLine(c *= 5); //c = c * 5
Console.WriteLine(c /= 5); //c = c / 5
Console.WriteLine(c %= 5); //c = c % 5

// Comparsion Operators
Console.WriteLine(a == b);
Console.WriteLine(a > b);
Console.WriteLine(a < b);
Console.WriteLine(a != b);
Console.WriteLine(a <= b);
Console.WriteLine(a >= b);

// Logical Operators
//AND &&
// T T == T a=56 b=23
Console.WriteLine(a > b && a <= b); //False
//OR || T F == T
Console.WriteLine(a > b || a <= b); //True
//NOT !
Console.WriteLine(!(a==b)); // True


// SALARY SYSTEM
Console.WriteLine("Enter Salary..");

int salary = Int32.Parse(Console.ReadLine());

if (salary > 50000 && !(salary >= 80000))
{
    Console.WriteLine("Good salary...");
}
else if (salary < 50000)
{
    Console.WriteLine("Do you get fuel allowance?");
    string answer = Console.ReadLine();

    answer = answer.ToLower();// yes  or y

    if (answer == "yes" || answer == "y")
    {
        Console.WriteLine("Sounds Goood!!");
    }
    else if (answer == "no" || answer == "n")
    {
        Console.WriteLine("Try to switch your job ASAP!!");
    }
    else
    {
        Console.WriteLine("Please enter yes or no.");
    }
}
else
{
    Console.WriteLine("Great!! MASHALLAH");
}










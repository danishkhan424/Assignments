using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Clear();
                Console.WriteLine("Welcome to the Simple Calculator");
                Console.WriteLine("Choose an action to perform");
                Console.WriteLine("1. Addition");
                Console.WriteLine("2. Substraction");
                Console.WriteLine("3. Multiplication");
                Console.WriteLine("4. Divide");
                Console.WriteLine("0. Exit");
                Console.Write("Enter your choice: ");

                int choice = Convert.ToInt32(Console.ReadLine());
                if (choice < 0 || choice > 4)
                {
                    Console.WriteLine("Invalid choice. Please try again");
                    Console.ReadKey();
                    continue;
                }
                if (choice == 0)
                {
                    Console.WriteLine("Exiting....");
                    Environment.Exit(0);
                }
                Console.Write("Enter the first number: ");
                double num1;
                if(!double.TryParse(Console.ReadLine(), out num1))
                {
                    Console.WriteLine("Invalid number. Please try again");
                    Console.ReadKey();
                    continue;
                }
                Console.Write("Enter the second number: ");
                double num2;
                if(!double.TryParse(Console.ReadLine(), out num2))
                {
                    Console.WriteLine("Invalid number. Please try again");
                    Console.ReadKey();
                    continue;
                }
                switch (choice)
                {
                    case 1:
                        num1 += num2;
                        break;
                    case 2:
                        num1 -= num2;
                        break;
                    case 3:
                        num1 *= num2;
                        break;
                    case 4:
                        if (num2 == 0)
                        {
                            Console.WriteLine("Can not be divide by Zero, please type another number.");
                            break;
                        }
                        num1 /= num2;
                        break;
                    default:
                        break;
                }
                Console.WriteLine($"Here is your result: {num1}");
                Console.WriteLine("Press any key to perform another calculation");
                Console.ReadKey();
            }
        }
    }
}

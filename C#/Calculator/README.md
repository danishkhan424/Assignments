# Simple Calculator in C#

## Overview
This is a **console-based Simple Calculator** written in C#. It allows users to perform basic arithmetic operations, including:

- Addition
- Subtraction
- Multiplication
- Division

Users can input two numbers and select an operation to perform. The program also includes error handling to prevent invalid inputs and division by zero.

## How the Calculator Works
1. The program runs in a continuous loop (`while (true)`) until the user chooses to exit.
2. The console is cleared at the beginning of each iteration for a clean display.
3. The user is prompted to select an operation from a menu.
4. If an invalid option is selected, the program asks the user to try again.
5. The user inputs two numbers, which are validated to ensure they are numeric.
6. The selected mathematical operation is performed using a `switch` statement.
7. The result is displayed on the screen.
8. The user is asked if they want to perform another calculation.

## Features
- **User-friendly interface**: Displays a clear menu and prompts.
- **Error handling**:
  - Ensures user inputs a valid number using `double.TryParse()`.
  - Prevents division by zero.
- **Exit option**: The user can exit the program by selecting `0`.

## Code Explanation
### 1. **Handling User Input**
```csharp
int choice = Convert.ToInt32(Console.ReadLine());
if (choice < 0 || choice > 4)
{
    Console.WriteLine("Invalid choice. Please try again");
    Console.ReadKey();
    continue;
}
```
- The user is asked to input a number between `0` and `4`.
- If the input is invalid, the program displays a message and prompts again.

### 2. **Handling Numeric Inputs Safely**
```csharp
if(!double.TryParse(Console.ReadLine(), out num1))
```
- `double.TryParse()` ensures that only valid numbers are accepted.
- If the input is invalid, the program asks the user to enter a correct number.

### 3. **Performing Calculations**
```csharp
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
            Console.WriteLine("Cannot divide by zero, please enter another number.");
            break;
        }
        num1 /= num2;
        break;
}
```
- Based on the user's choice, the program performs the respective operation.
- If the user selects **division**, the program ensures that division by zero does not occur.

### 4. **Exiting the Program**
```csharp
if (choice == 0)
{
    Console.WriteLine("Exiting....");
    Environment.Exit(0);
}
```
- If the user enters `0`, the program terminates using `Environment.Exit(0);`.

## How to Run the Program
1. Copy the code into a new **C# Console Application**.
2. Build and run the project in **Visual Studio** or any C# compiler.
3. Follow the on-screen instructions to perform calculations.

## Possible Enhancements
- Add support for more operations (e.g., modulus, power, square root).
- Allow multiple calculations without restarting the loop.
- Implement a history feature to track past calculations.

## Conclusion
This **Simple Calculator in C#** demonstrates fundamental programming concepts such as loops, conditional statements, user input validation, and exception handling. It is a great beginner-friendly project to practice C# basics.

---

### Created By
**Danish Khan**

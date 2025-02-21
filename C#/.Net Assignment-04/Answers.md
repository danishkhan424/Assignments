## Section 1: Basic Questions

1. What are the different types of loops in C#?

    **Answer:** 

    1. **for loop**: Repeats a block of code a specific number of times.
        ```csharp
        for (int i = 0; i < 10; i++)
        {
            // Code to execute
        }
        ```

    2. **foreach loop**: Iterates through each item in a collection (like an array or list).
        ```csharp
        foreach (var item in collection)
        {
            // Code to execute
        }
        ```

    3. **while loop**: Repeats a block of code as long as a condition is true.
        ```csharp
        while (condition)
        {
            // Code to execute
        }
        ```

    4. **do-while loop**: Similar to the `while` loop, but it executes the block of code at least once before checking the condition.
        ```csharp
        do
        {
            // Code to execute
        } while (condition);
        ```

2. Explain the syntax and working of the for loop in C#.

    **Answer:** 

    The **for loop** in C# is a control structure used to execute a block of code repeatedly for a known number of iterations. Its syntax is structured into three parts:

    ```csharp
    for (initialization; condition; iteration)
    {
        // Code to execute in each loop iteration
    }
    ```

    **Here's how it works:**

    1. **Initialization:**  
    This part is executed **once** at the beginning. It usually declares and initializes a loop counter (e.g., `int i = 0`).

    2. **Condition:**  
    Before each iteration, the loop checks this condition. If it's true, the loop body executes; if false, the loop terminates.

    3. **Iteration (or Increment/Decrement):**  
    After the loop body executes, this part runs. It typically updates the loop counter (e.g., `i++`), preparing for the next iteration.

    **Example:**

    ```csharp
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Iteration number: " + i);
    }
    ```

    - **Initialization:** `int i = 0` sets the counter to 0.
    - **Condition:** `i < 5` means the loop will run as long as `i` is less than 5.
    - **Iteration:** `i++` increments the counter by 1 after each loop cycle.

    This loop will print the message five times, with `i` taking values 0, 1, 2, 3, and 4. You can also include multiple initialization or iteration expressions separated by commas, and any of the three parts are optional if needed.

3. How does a while loop work?

    **Answer:**

    1. **Condition Check:** Before each iteration, the loop checks a specified condition.
    2. **Execution:** If the condition is true, the code block inside the loop runs.
    3. **Re-evaluation:** After executing the code block, the loop goes back to check the condition again.
    4. **Termination:** Once the condition becomes false, the loop stops executing, and the program continues with the next statement after the loop.

    This structure means that if the condition is false right from the start, the loop body won't run at all.


4. What is the difference between a while loop and a do-while loop?

    **Answer:** 

    - **While Loop:**  
    The condition is checked **before** executing the loop's body. This means if the condition is false from the start, the loop body may never run.

    - **Do-While Loop:**  
    The loop’s body is executed **first** and then the condition is checked afterward. This guarantees that the loop body runs at least once, even if the condition is false initially.

5. What happens if the loop condition in a while loop is initially false?

    **Answer:** 

    - if the loop condition in a while loop is initially false, the loop body will not execute even once. Since the condition is checked before the loop begins, the program skips the loop entirely and moves to the next statement.



6. How do you use a foreach loop in C#?

    **Answer:** 

    The **foreach** loop in C# is a simple way to iterate over each element in a collection (like an array or a list) without worrying about indexing. Here's how you can use it:

    ```csharp
    // Example: Iterating over an array of names
    string[] names = { "Alice", "Bob", "Charlie" };

    foreach (string name in names)
    {
        Console.WriteLine(name);
    }
    ```

    **Explanation:**

    - **Syntax:**  
    ```csharp
    foreach (type variable in collection)
    {
        // Code to execute for each element
    }
    ```
    In this structure, **type** is the data type of the elements, **variable** is the temporary variable representing each element, and **collection** is the array or list you're iterating over.

    - **Working:**  
    The loop automatically retrieves each element from the collection one by one and assigns it to the iteration variable (in the example above, `name`). The code inside the loop then executes for that element.

    - **When to Use:**  
    Use **foreach** when you want to read through all the items in a collection easily without the need to manipulate indices.


7. Can we modify elements inside a foreach loop? Why or why not?

    **Answer:** 

    In **C#**, you **cannot modify** elements directly inside a `foreach` loop when iterating over collections like arrays or lists. Here’s why:

    ### **Why You Can't Modify Elements in a foreach Loop**
    1. **Read-Only Iteration:**  
    The variable inside a `foreach` loop is **a copy** of the element, not a reference to the actual element in the collection. Any changes you make to it **do not** affect the original collection.

    2. **Memory Safety & Performance:**  
    `foreach` is optimized for iteration and ensures that collections remain consistent during execution. Allowing modification could lead to unpredictable behavior.

    ### **Example - Attempting Modification (Won't Work)**
    ```csharp
    int[] numbers = { 1, 2, 3, 4, 5 };

    foreach (int num in numbers)
    {
        num = num * 2; // ❌ This does nothing to the original array
    }

    Console.WriteLine(string.Join(", ", numbers)); // Output: 1, 2, 3, 4, 5
    ```
    Since `num` is a **copy**, modifying it does not change the array.

    ### **How to Modify Elements Instead?**
    1. **Use a for Loop (Recommended for Modification)**
    ```csharp
    for (int i = 0; i < numbers.Length; i++)
    {
        numbers[i] *= 2; // ✅ Modifies the original array
    }
    ```

    2. **Use List with Indexing (`for` Loop)**
    ```csharp
    List<int> numbersList = new List<int> { 1, 2, 3, 4, 5 };

    for (int i = 0; i < numbersList.Count; i++)
    {
        numbersList[i] *= 2; // ✅ Works
    }
    ```

    3. **Using LINQ (`Select` Method for Transformation)**
    ```csharp
    numbers = numbers.Select(n => n * 2).ToArray(); // ✅ Works by creating a new array
    ```

    ### **When Can You Modify Elements in foreach?**
    If you're working with **reference types** (like objects in a list), you can modify their properties inside a `foreach` loop because the loop variable still **points** to the same object.

    ```csharp
    class Person
    {
        public string Name { get; set; }
    }

    List<Person> people = new List<Person> { new Person { Name = "Alice" }, new Person { Name = "Bob" } };

    foreach (Person p in people)
    {
        p.Name = "Updated"; // ✅ Works because it's modifying an object property, not the reference
    }

    Console.WriteLine(people[0].Name); // Output: Updated
    ```

    ### **Summary**
    - ❌ **You cannot modify elements in a `foreach` loop** if you're iterating over value types (like `int`, `string`, etc.).
    - ✅ **You can modify properties of objects** if you're iterating over reference types (like `class` instances).
    - ✅ **Use a `for` loop** or **LINQ** if you need to modify elements in an array or list.


## Section 2: Intermediate Questions



8. What is an infinite loop? Provide examples using `for`, `while`, and `do-while`.

    **Answer:**

    An **infinite loop** is a loop that never stops executing because its condition always evaluates to `true`.

    **Example using `for` loop**
    ```csharp
    for (;;)
    {
        Console.WriteLine("This is an infinite loop");
    }
    ```
    Here, there is no condition, so the loop runs indefinitely.

    **Example using `while` loop**
    ```csharp
    while (true)
    {
        Console.WriteLine("This is an infinite loop");
    }
    ```
    Since the condition is always `true`, the loop never stops.

    **Example using `do-while` loop**
    ```csharp
    do
    {
        Console.WriteLine("This is an infinite loop");
    } while (true);
    ```
    Since `true` is always `true`, the loop continues forever.

---

9. How does the `break` statement work inside loops?


    **Answer:**

    The `break` statement **immediately exits the loop**, stopping further execution.

    **Example**

    ```csharp

    for (int i = 1; i <= 10; i++)
    {
        if (i == 5)
            break; // Loop exits when i == 5

        Console.WriteLine(i);
    }
    // Output: 1 2 3 4
    ```

    The loop stops when `i` is **5**, so it prints `1 2 3 4` and exits.

---

10. What is the role of the `continue` statement in loops?

    **Answer:**

    The `continue` statement **skips the rest of the loop body** and moves to the next iteration.

    **Example**
    ```csharp
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3)
            continue; // Skips printing when i == 3

        Console.WriteLine(i);
    }
    // Output: 1 2 4 5
    ```
    When `i == 3`, `continue` skips that iteration, so `3` is missing in the output.

---

11. How can you exit multiple nested loops at once? You can exit **multiple nested loops** using a **labeled break**.

    **Answer:**


    **Example**
    ```csharp
    OuterLoop:
    for (int i = 1; i <= 3; i++)
    {
        for (int j = 1; j <= 3; j++)
        {
            if (i == 2 && j == 2)
                break OuterLoop; // Exits both loops

            Console.WriteLine($"i = {i}, j = {j}");
        }
    }
    /*
    Output:
    i = 1, j = 1
    i = 1, j = 2
    i = 1, j = 3
    i = 2, j = 1
    */
    ```
    When `i == 2` and `j == 2`, `break OuterLoop;` exits **both** loops.

---

12. What is the difference between `break` and `return` inside a loop?

    **Answer:**


    | **Feature**  | **break**  | **return**  |
    |-------------|-----------|------------|
    | **Purpose** | Exits only the loop | Exits the entire method |
    | **Effect**  | Continues execution after the loop | Stops execution completely |
    | **Usage**   | Used inside loops or switch statements | Used inside methods/functions |

    **Example using `break`**
    ```csharp
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3)
            break;

        Console.WriteLine(i);
    }
    Console.WriteLine("Loop ended");
    // Output: 1 2 "Loop ended"
    ```
    The loop **ends**, but the method **continues** executing.

    **Example using `return`**
    ```csharp
    for (int i = 1; i <= 5; i++)
    {
        if (i == 3)
            return;

        Console.WriteLine(i);
    }
    Console.WriteLine("Loop ended"); // This will NOT execute
    // Output: 1 2 (Method exits completely)
    ```
    The **entire method exits**, so `"Loop ended"` is **never printed**.

---

13. How do you iterate through an array using loops?

    **Answer:**
    
    You can iterate through an array using **for**, **foreach**, or **while** loops.

    **Example using `for` loop**

    ```csharp

    int[] numbers = { 10, 20, 30, 40, 50 };

    for (int i = 0; i < numbers.Length; i++)
    {
        Console.WriteLine(numbers[i]);
    }
    ```

    **Example using `foreach` loop**

    ```csharp

    foreach (int num in numbers)
    {
        Console.WriteLine(num);
    }
    ```

    **Example using `while` loop**

    ```csharp

    int index = 0;
    while (index < numbers.Length)
    {
        Console.WriteLine(numbers[index]);
        index++;
    }
    ```
    All methods **print** each element of the array.

---

14. Write a C# program to find the largest and smallest number in an array using loops.**

    **Answer:**

    A C# program that finds the **largest** and **smallest** number in an array:

    ```csharp
    using System;

    class Program
    {
        static void Main()
        {
            int[] numbers = { 25, 10, 45, 5, 30 };

            int largest = numbers[0];
            int smallest = numbers[0];

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] > largest)
                    largest = numbers[i];

                if (numbers[i] < smallest)
                    smallest = numbers[i];
            }

            Console.WriteLine($"Largest: {largest}");
            Console.WriteLine($"Smallest: {smallest}");
        }
    }
    ```

    **Output**
    ```plaintext
    Largest: 45
    Smallest: 5
    ```

15. Can a for loop run indefinitely? If yes, how?

    **Answer:**
    
    Yes, a `for` loop can run indefinitely if no condition is specified.
    
    **Example**
    ```csharp
    for (;;)
    {
        Console.WriteLine("Running forever");
    }
    ```
    This loop has no stopping condition, so it runs forever.

---

16. How do you implement a loop using recursion instead of traditional looping constructs?

    **Answer:**
    
    Recursion calls the same function repeatedly until a base condition is met.
    
    **Example**
    ```csharp
    void RecursiveLoop(int i)
    {
        if (i > 5) return; // Base condition
        Console.WriteLine(i);
        RecursiveLoop(i + 1);
    }
    
    RecursiveLoop(1);
    ```
    This mimics a loop by calling the function repeatedly.

---

17. What is the impact of using `goto` inside loops? Is it recommended? Explain with an example.

    **Answer:**
    
    `goto` can make code harder to read and debug. It is **not recommended**.
    
    **Example**
    ```csharp
    int i = 1;
    start:
    if (i > 5) return;
    Console.WriteLine(i);
    i++;
    goto start;
    ```
    This works like a loop but is discouraged due to poor readability.

---

18. How does a `foreach` loop work internally in C#?

    **Answer:**
    
    `foreach` uses the **IEnumerator** interface to iterate over collections.
    
    **Example**
    ```csharp
    foreach (var item in collection)
    {
        // Internally equivalent to:
        var enumerator = collection.GetEnumerator();
        while (enumerator.MoveNext())
        {
            var item = enumerator.Current;
        }
    }
    ```
    It abstracts away the manual iteration process.

---

19. Can a `foreach` loop be replaced with a `for` loop? If yes, in what cases?

    **Answer:**
    
    Yes, when working with **index-based collections** like arrays or lists.
    
    **Example**
    ```csharp
    string[] names = { "A", "B", "C" };
    
    // foreach
    foreach (var name in names)
    {
        Console.WriteLine(name);
    }
    
    // Equivalent for loop
    for (int i = 0; i < names.Length; i++)
    {
        Console.WriteLine(names[i]);
    }
    ```
    For `Dictionary` and `IEnumerable`, `foreach` is preferred.

---

20. How do you optimize performance in loops when working with large datasets?

    **Answer:**
    
    - Use **for loops** over `foreach` for index-based collections.
    - Minimize operations inside the loop.
    - Cache collection length (`int len = arr.Length`).
    - Use **Parallel.ForEach** for multi-threading.

---

21. What are the best practices for writing efficient loops in C#?

    **Answer:**
    
    - Use **pre-increment (`++i`)** instead of post-increment (`i++`) when possible.
    - Avoid modifying collections while iterating.
    - Use **LINQ** for readability.
    - Use `Span<T>` or `Memory<T>` for performance-sensitive data.
    
    **Example**
    ```csharp
    int[] numbers = { 1, 2, 3, 4, 5 };
    for (int i = 0, len = numbers.Length; i < len; i++)
    {
        Console.WriteLine(numbers[i]); // Cached length improves performance
    }
    ```

---

22. How does the `Parallel.ForEach` loop differ from a normal `foreach` loop? Provide an example.

    **Answer:**
    
    `Parallel.ForEach` runs iterations **concurrently** on multiple threads.
    
    **Example**
    ```csharp
    using System.Threading.Tasks;

    int[] numbers = { 1, 2, 3, 4, 5 };

    Parallel.ForEach(numbers, number =>
    {
        Console.WriteLine($"Processing {number} on thread {Task.CurrentId}");
    });
    ```
    It improves performance when handling large datasets.

## Bonus Challenge

Write a C# program that processes a list of tasks using both normal `foreach` and `Parallel.ForEach` loops. Compare and explain the output. How does parallel processing improve performance in this scenario?

**Answer:**

   A normal `foreach` loop runs tasks **sequentially**, while `Parallel.ForEach` runs tasks **concurrently** using multiple threads, reducing execution time.

   **Example**
   ```csharp
   using System;
   using System.Collections.Generic;
   using System.Diagnostics;
   using System.Threading;
   using System.Threading.Tasks;

   class Program
   {
       static void ProcessTask(string task)
       {
           Console.WriteLine($"Processing {task} on thread {Thread.CurrentThread.ManagedThreadId}");
           Thread.Sleep(500); // Simulate a time-consuming task
       }

       static void Main()
       {
           List<string> tasks = new List<string> { "Task1", "Task2", "Task3", "Task4", "Task5" };

           // Normal foreach loop
           Stopwatch sw = Stopwatch.StartNew();
           foreach (var task in tasks)
           {
               ProcessTask(task);
           }
           sw.Stop();
           Console.WriteLine($"Normal foreach time: {sw.ElapsedMilliseconds} ms\n");

           // Parallel.ForEach loop
           sw.Restart();
           Parallel.ForEach(tasks, task =>
           {
               ProcessTask(task);
           });
           sw.Stop();
           Console.WriteLine($"Parallel.ForEach time: {sw.ElapsedMilliseconds} ms");
       }
   }
   ```

   **Explanation:**
   - **Normal `foreach` loop**: Executes tasks **one after another** in a single thread.
   - **`Parallel.ForEach` loop**: Executes tasks **in parallel on multiple threads**, improving performance.
   - **Faster Execution**: Utilizes CPU cores efficiently, especially for CPU-bound tasks.

   **Expected Output**
   ```
   Processing Task1 on thread 1
   Processing Task2 on thread 1
   Processing Task3 on thread 1
   Processing Task4 on thread 1
   Processing Task5 on thread 1
   Normal foreach time: 2500 ms

   Processing Task1 on thread 3
   Processing Task2 on thread 4
   Processing Task3 on thread 5
   Processing Task4 on thread 6
   Processing Task5 on thread 7
   Parallel.ForEach time: 500 ms
   ```

   **Conclusion:**  
   - **Normal `foreach`** → **Slower** (single-threaded).  
   - **`Parallel.ForEach`** → **Faster** (multi-threaded).  
   - **Useful for large datasets and time-consuming tasks.**

## **Coding (2.5 hr)**

### **Arrays**

1. Implement a method to find the subarray with the maximum sum (Kadane’s Algorithm) in a given integer array.

    ```c#
    using System;

    public static int FindMaxSubArraySum(int[] numbers)
    {
        
        int maxSum = numbers[0], currentSum = numbers[0];
        
        
        for (int index = 1; index < numbers.Length; index++)
        {
            currentSum = Math.Max(numbers[index], currentSum + numbers[index]);
            
            maxSum = Math.Max(maxSum, currentSum);
        }
        
        return maxSum;
    }

    public class Program
    {
        static void Main()
        {
            int[] array = { -2, 1, -3, 4, -1, 2, 1, -5, 4 };
            
            Console.WriteLine("Max subarr sum is: " + FindMaxSubArraySum(array));
            // Output:  6
        }
    }



    ```

2. Write a program to find the intersection and union of two unsorted arrays without using built-in functions.

    ```c#

    using System;

    public class Program
    {
        public static void Main(string[] args)
        {
            int[] array1 = { 7, 1, 5, 2, 3, 6 };
            int[] array2 = { 3, 8, 6, 20, 7 };

            FindUnionAndIntersection(array1, array2);
        }

        static void FindUnionAndIntersection(int[] array1, int[] array2)
        {
            int[] unionArray = new int[array1.Length + array2.Length];
            int unionCount = 0;
            int[] intersectionArray = new int[Math.Min(array1.Length, array2.Length)];
            int intersectionCount = 0;

            // Find Union
            for (int i = 0; i < array1.Length; i++)
            {
                unionArray[unionCount++] = array1[i];
            }

            for (int i = 0; i < array2.Length; i++)
            {
                bool isPresent = false;
                for (int j = 0; j < array1.Length; j++)
                {
                    if (array2[i] == array1[j])
                    {
                        isPresent = true;
                        break;
                    }
                }
                if (!isPresent)
                {
                    unionArray[unionCount++] = array2[i];
                }
            }

            // Find Intersection
            for (int i = 0; i < array1.Length; i++)
            {
                for (int j = 0; j < array2.Length; j++)
                {
                    if (array1[i] == array2[j])
                    {
                        bool alreadyAdded = false;
                        for (int k = 0; k < intersectionCount; k++)
                        {
                            if (intersectionArray[k] == array1[i])
                            {
                                alreadyAdded = true;
                                break;
                            }
                        }
                        if (!alreadyAdded)
                        {
                            intersectionArray[intersectionCount++] = array1[i];
                        }
                    }
                }
            }

            // Output Union
            Console.WriteLine("Union:");
            for (int i = 0; i < unionCount; i++)
            {
                Console.Write(unionArray[i] + " ");
            }

            // Output Intersection
            Console.WriteLine("\nIntersection:");
            for (int i = 0; i < intersectionCount; i++)
            {
                Console.Write(intersectionArray[i] + " ");
            }
        }
    }

    ```


3. Implement a sparse matrix multiplication algorithm using a 2D array in C#.

    ```c#

    using System;

    public class Program
    {
        public static void Main()
        {
            int[,] A = {
                { 1, 0, 0 },
                { -1, 0, 3 }
            };

            int[,] B = {
                { 7, 0, 0 },
                { 0, 0, 0 },
                { 0, 0, 1 }
            };

            int[,] result = MultiplySparseMatrices(A, B);

            PrintMatrix(result);
        }

        public static int[,] MultiplySparseMatrices(int[,] A, int[,] B)
        {
            int rowsA = A.GetLength(0);
            int colsA = A.GetLength(1);
            int rowsB = B.GetLength(0);
            int colsB = B.GetLength(1);

            if (colsA != rowsB)
            {
                throw new ArgumentException("Number of columns in A must be equal to number of rows in B");
            }

            int[,] result = new int[rowsA, colsB];

            for (int i = 0; i < rowsA; i++)
            {
                for (int k = 0; k < colsA; k++)
                {
                    if (A[i, k] != 0)
                    {
                        for (int j = 0; j < colsB; j++)
                        {
                            if (B[k, j] != 0)
                            {
                                result[i, j] += A[i, k] * B[k, j];
                            }
                        }
                    }
                }
            }

            return result;
        }

        public static void PrintMatrix(int[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int cols = matrix.GetLength(1);

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }


    ```
4. Write a method to find the first missing positive integer in an unsorted array (without sorting).

    ```c#

    using System;

    public class Program
    {
        public static void Main()
        {
            int[,] matrixA = {
                { 1, 0, 0 },
                { -1, 0, 3 }
            };

            int[,] matrixB = {
                { 7, 0, 0 },
                { 0, 0, 0 },
                { 0, 0, 1 }
            };

            int[,] resultMatrix = MultiplySparseMatrices(matrixA, matrixB);

            PrintMatrix(resultMatrix);
        }

        public static int[,] MultiplySparseMatrices(int[,] matrixA, int[,] matrixB)
        {
            int rowsA = matrixA.GetLength(0);
            int columnsA = matrixA.GetLength(1);
            int rowsB = matrixB.GetLength(0);
            int columnsB = matrixB.GetLength(1);

            if (columnsA != rowsB)
            {
                throw new ArgumentException("Number of columns in matrixA must be equal to number of rows in matrixB");
            }

            int[,] resultMatrix = new int[rowsA, columnsB];

            for (int rowIndexA = 0; rowIndexA < rowsA; rowIndexA++)
            {
                for (int columnIndexA = 0; columnIndexA < columnsA; columnIndexA++)
                {
                    if (matrixA[rowIndexA, columnIndexA] != 0)
                    {
                        for (int columnIndexB = 0; columnIndexB < columnsB; columnIndexB++)
                        {
                            if (matrixB[columnIndexA, columnIndexB] != 0)
                            {
                                resultMatrix[rowIndexA, columnIndexB] += matrixA[rowIndexA, columnIndexA] * matrixB[columnIndexA, columnIndexB];
                            }
                        }
                    }
                }
            }

            return resultMatrix;
        }

        public static void PrintMatrix(int[,] matrix)
        {
            int rowCount = matrix.GetLength(0);
            int columnCount = matrix.GetLength(1);

            for (int rowIndex = 0; rowIndex < rowCount; rowIndex++)
            {
                for (int columnIndex = 0; columnIndex < columnCount; columnIndex++)
                {
                    Console.Write(matrix[rowIndex, columnIndex] + " ");
                }
                Console.WriteLine();
            }
        }
    }



    ```
5. Design a method to rotate a 2D matrix (NxN) 90 degrees clockwise in place without using extra space.

---

### **Classes (Advanced Level)**

1. Create a "StockPortfolio" class that tracks multiple stocks. Implement methods to add stocks, remove stocks, and calculate the total portfolio value dynamically.

2. Design a "SmartHomeSystem" class that contains a list of connected devices. Implement methods to add a device, remove a device, and turn on/off all devices dynamically.
3. Implement a "TaskScheduler" class with priority-based task execution using a queue-based approach.
4. Create a "BlockchainTransaction" class with cryptographic hashing of transactions using SHA256. Implement methods for validating transactions.
5. Build a "MusicPlaylist" class with a doubly linked list structure to efficiently add, remove, and play songs.

---

### **Polymorphism (Advanced Level)**

1. Create an "ExpressionEvaluator" class using operator overloading to evaluate mathematical expressions dynamically.
2. Implement a "DatabaseConnector" base class with different derived classes for SQL, MongoDB, and Firebase that override a `Connect()` method.
3. Develop a "FileCompressor" class with overloaded `Compress()` methods that handle text, images, and videos differently.
4. Design an "AIModel" class with multiple versions (BasicAI, NeuralNet, DeepLearning) that override a `TrainModel()` method for different complexity levels.
5. Create a "GamePhysicsEngine" base class with different implementations for 2D and 3D games using runtime polymorphism.

---

### **Inheritance (Advanced Level)**

1. Implement a "MultiLevelBankingSystem" where "CentralBank" is the parent class, "NationalBank" is the child, and "LocalBank" is a subclass of "NationalBank". Override an `InterestRate()` method at each level.
2. Develop a "SmartVehicle" inheritance hierarchy where a "Vehicle" class has electric and gas-powered subclasses, and further derived classes like "SelfDrivingCar" and "HybridCar". Implement an overridden `Drive()` method in each.
3. Create an "EmployeeHierarchy" where "Employee" is the base class, inherited by "Manager" and "Director". Implement a `CalculateBonus()` method differently for each.
4. Design a "SecureMessagingSystem" where "Message" is a base class with encrypted and non-encrypted message types, overriding a `Send()` method with encryption logic in the subclass.
5. Develop an "ECommercePlatform" class structure with multiple levels of inheritance where "Product" is the base class, extended by "Electronics" and "Clothing", with further derived classes like "Laptop" and "T-Shirt". Implement a method to calculate discounts dynamically.
using System;

//  1. Sum of Array Elements
// public class Program
// {
//     public static int ArraySum(int[] arr)
//     {
//         int sum = 0;
//         foreach (int num in arr)
//         {
//             sum += num;
//         }
//         return sum;
//     }

//     public static void Main()
//     {
//         int[] array = { 1, 2, 3, 4, 10, 11 };
//         int result = ArraySum(array);
//         Console.WriteLine(result); // Output: 31
//     }
// }


//  2. Find the Missing Number

// public class Program
// {
//     public static int FindMissNumber(int[] arr, int n)
//     {
//         int expectedSum = n * (n + 1) / 2;
//         int actualSum = 0;
//         foreach (int num in arr)
//         {
//             actualSum += num;
//         }
//         return expectedSum - actualSum;
//     }

//     public static void Main()
//     {
//         int[] array = { 1, 2, 4, 5, 6 };
//         int n = 6;
//         int missingNumber = FindMissNumber(array, n);
//         Console.WriteLine(missingNumber); // Output: 3
//     }
// }

﻿// QUE-01

// int x = 10;
// if (x = 5) // # it should have '==' instead of '=' in if condition
// Console.WriteLine("True");
// else
// Console.WriteLine("False");

// Que-02

// int a = 10, b = 20, c = 30;
// if (a > b && a > c)
// Console.WriteLine("A is largest");
// else if (b > a && b > c)
// Console.WriteLine("B is largest");
// else
// Console.WriteLine("C is largest");

// Que-03

// int num = 2;
// switch (num + 1) {
// case 1: Console.Write("One");
// break;
// case 2: Console.Write("Two");
// break;
// case 3: Console.Write("Three"); // it should has break;
// case 4: Console.Write("Four"); // it should has break;
// default: Console.Write("Default");
// break;
// }

// QUE-04

// int x = 0;
// if (x) // Problem: 'int' cannot be used as a boolean in C#
// Console.WriteLine("Hello");
// else
// Console.WriteLine("World");

// QUE-05

// bool isTrue = false;
// if (isTrue = true) // Problem: Assignment inside 'if' instead of comparison
// Console.WriteLine("Yes");
// else
// Console.WriteLine("No");

// QUE-06

// int x = 5, y = 10;
// if (x > 0)
// if (y < 10)
// Console.WriteLine("A");
// else
// Console.WriteLine("B");
// else
// Console.WriteLine("C");

// QUE-07

// int a = 5;
// if (a > 0)
// if (a < 10)
// Console.WriteLine("X");
// else if (a > 2)
// Console.WriteLine("Y");
// else
// Console.WriteLine("Z");

// QUE-08

// int x = 5, y = 10;
// if (x++ > 5 && y++ < 10)
// Console.WriteLine(x, y);
// else
// Console.WriteLine(x, y);

// QUE-09

// double x = 0.1 + 0.2;
// if (x == 0.3)
// Console.WriteLine("Equal");
// else
// Console.WriteLine("Not Equal");

// QUE-10

// decimal x = 0.1m + 0.2m;
// if (x == 0.3m)
// Console.WriteLine("Equal");

// 11

// for (int i = 1; i <= 5; i++)
// {
// Console.Write(i + " ");
// }

// 12 
// for (int i = 5; i >= 1; i--)
// {
// Console.Write(i + " ");
// }

//13
// (int i = 1; i <= 5; i++)
// {
// if (i == 3)
// continue;
// Console.Write(i + " ");
// }


//14
// for (int i = 1; i <= 5; i++)
// {
// if (i == 3)
// break;
// Console.Write(i + " ");
// }

//15
// int i = 1;
// while (i <= 3)
// {
// Console.Write(i + " ");
// i++;
// }

//16
// int i = 1;
// while (i > 0)
// {
// Console.Write(i + " ");
// if (i == 3) break;
// i++;
// }

//17
// int i = 5;
// do
// {
// Console.Write(i + " ");
// } while (i < 3);

//18
// for (int i = 1; i <= 3; i++)
// {
// for (int j = 1; j <= 2; j++)
// {
// Console.Write(i + "" + j + " ");
// }
// }

//19
// for (int i = 2; i <= 10; i += 2)
// {
// Console.Write(i + " ");
// }

// 20
// int i = 1;
// while (i <= 10)
// {
// Console.Write(i + " ");
// i += 2;
// }

// 21

// int sum = 0;
// for (int i = 1; i <= 5; i++)
// {
// sum += i;
// }
// Console.Write(sum);

// 22
// int fact = 1;
// for (int i = 1; i <= 4; i++)
// {
// fact *= i;
// }
// Console.Write(fact);

// 23
// int num = 1234, count = 0;
// while (num > 0)
// {
// count++;
// num /= 10;
// }
// Console.Write(count);

// 24
// int num = 123, rev = 0;
// while (num > 0)
// {
// rev = rev * 10 + num % 10;
// num /= 10;
// }
// Console.Write(rev);

//25
// for (int i = 1; i <= 5; i++)
// {
// Console.Write(3 * i + " ");
// }

//26
// int a = 0, b = 1, c;
// Console.Write(a + " " + b + " ");
// for (int i = 2; i < 5; i++)
// {
// c = a + b;
// Console.Write(c + " ");
// a = b;
// b = c;
// }

// // 27
// for (int i = 1; i <= 5; i++)
// {
// if (i % 2 == 0) continue;
// Console.Write(i + " ");
// }

// 28
// int i = 1;
// while (i <= 3)
// Console.Write(i++ + " ");

// 29
// int num = 123, sum = 0;
// while (num > 0)
// {
// sum += num % 10;
// num /= 10;
// }
// Console.Write(sum);

// 30
// int num = 7, flag = 1;
// for (int i = 2; i < num; i++)
// {
// if (num % i == 0)
// {
// flag = 0;
// break;
// }
// }
// Console.Write(flag == 1 ? "Prime" : "Not Prime");

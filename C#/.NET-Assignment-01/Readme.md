# Q3_Technology
## .Net-Assignment-01

1. 

```c#

int x = 10;
if (x = 5)
Console.WriteLine("True");
else
Console.WriteLine("False");


```

```yml
Problem: "Cannot implicitly convert type 'int' to 'bool'" # it should have '==' instead of '=' in if condition
Answer: False

```

2.

```c#

int a = 10, b = 20, c = 30;
if (a > b && a > c)
Console.WriteLine("A is largest");
else if (b > a && b > c)
Console.WriteLine("B is largest");
else
Console.WriteLine("C is largest");


```

```yml

Answer: C is largest

```

3.

```c#

int num = 2;
switch (num + 1) {
case 1: Console.Write("One");
break;
case 2: Console.Write("Two");
break;
case 3: Console.Write("Three");
case 4: Console.Write("Four");
break;
default: Console.Write("Default");
}


```

```yml
Problem: Control cannot fall through from one case label ('case 3:') to another
Answer: Three

```

4.

```c#

int x = 0;
if (x)
Console.WriteLine("Hello");
else
Console.WriteLine("World");


```

```yml

Answer: Compilation Error

```

5.

```c#

bool isTrue = false;
if (isTrue = true)
Console.WriteLine("Yes");
else
Console.WriteLine("No");


```

```yml

Answer: Yes (Because 'isTrue' is assigned 'true')

```

6.

```c#

int x = 5, y = 10;
if (x > 0)
if (y < 10)
Console.WriteLine("A");
else
Console.WriteLine("B");
else
Console.WriteLine("C");


```

```yml

Answer: B

```

7.

```c#

int a = 5;
if (a > 0)
if (a < 10)
Console.WriteLine("X");
else if (a > 2)
Console.WriteLine("Y");
else
Console.WriteLine("Z");


```

```yml

Answer: X (Because first condition is true)

```

8.

```c#

int x = 5, y = 10;
if (x++ > 5 && y++ < 10)
Console.WriteLine(x,y);
else
Console.WriteLine(x,y);


```

```yml

Answer: 6, 10 (First condition is false, 'y' does not increment)

```

9.

```c#

double x = 0.1 + 0.2;
if (x == 0.3)
Console.WriteLine("Equal");
else
Console.WriteLine("Not Equal");


```

```yml

Answer: Not Equal (Due to floating-point precision issues)


```

10.

```c#

decimal x = 0.1m + 0.2m;
if (x == 0.3m)
Console.WriteLine("Equal");


```

```yml

Answer: Equal (Decimal arithmetic is exact in C#)

```

11.

```c#

for (int i = 1; i <= 5; i++)
{
Console.Write(i + " ");
}


```

```yml

Answer: 1 2 3 4 5 

```

12.

```c#

for (int i = 5; i >= 1; i--)
{
Console.Write(i + " ");
}


```

```yml

Answer: 5 4 3 2 1

```

13.

```c#

(int i = 1; i <= 5; i++)
{
if (i == 3)
continue;
Console.Write(i + " ");
}


```

```yml
Problem: error CS1026: ) 
Answer: 
for (int i = 1; i <= 5; i++)
 {
     if (i == 3)
         continue;
     Console.Write(i + " ");
 }

```

14.

```c#

for (int i = 1; i <= 5; i++)
{
if (i == 3)
break;
Console.Write(i + " ");
}


```

```yml

Answer: 1 2

```

15.

```c#

int i = 1;
while (i <= 3)
{
Console.Write(i + " ");
i++;
}


```

```yml

Answer: 1 2 3

```

16.

```c#

int i = 1;
while (i > 0)
{
Console.Write(i + " ");
if (i == 3) break;
i++;
}


```

```yml

Answer: 1 2 3

```

17.

```c#

int i = 5;
do
{
Console.Write(i + " ");
} while (i < 3);


```

```yml

Answer: 5

```

18.

```c#

for (int i = 1; i <= 3; i++)
{
for (int j = 1; j <= 2; j++)
{
Console.Write(i + "" + j + " ");
}
}


```

```yml

Answer: 11 12  21 22 31 33

```

19.

```c#

for (int i = 2; i <= 10; i += 2)
{
Console.Write(i + " ");
}


```

```yml

Answer: 2 4 6 8 10

```

20.

```c#

int sum = 0;
for (int i = 1; i <= 5; i++)
{
sum += i;
}
Console.Write(sum);


```

```yml

Answer: 1 3 5 7 9

```

21.

```c#

int sum = 0;
for (int i = 1; i <= 5; i++)
{
sum += i;
}
Console.Write(sum);


```

```yml

Answer: 15

```

22.

```c#

int fact = 1;
for (int i = 1; i <= 4; i++)
{
fact *= i;
}
Console.Write(fact);


```

```yml

Answer: 24

```

23.

```c#

int num = 1234, count = 0;
while (num > 0)
{
count++;
num /= 10;
}
Console.Write(count);


```

```yml

Answer: 4

```

24.

```c#

int num = 123, rev = 0;
while (num > 0)
{
rev = rev * 10 + num % 10;
num /= 10;
}
Console.Write(rev);


```

```yml

Answer: 321

```

25.

```c#

for (int i = 1; i <= 5; i++)
{
Console.Write(3 * i + " ");
}


```

```yml

Answer: 3 6 9 12 15

```

26.

```c#

int a = 0, b = 1, c;
Console.Write(a + " " + b + " ");
for (int i = 2; i < 5; i++)
{
c = a + b;
Console.Write(c + " ");
a = b;
b = c;
}


```

```yml

Answer: 0 1 1 2 3

```

27.

```c#

for (int i = 1; i <= 5; i++)
{
if (i % 2 == 0) continue;
Console.Write(i + " ");
}


```

```yml

Answer: 1 3 5

```

28.

```c#

int i = 1;
while (i <= 3)
Console.Write(i++ + " ");


```

```yml

Answer: 1 2 3

```

29.

```c#

int num = 123, sum = 0;
while (num > 0)
{
sum += num % 10;
num /= 10;
}
Console.Write(sum);


```

```yml

Answer: 6

```

30.

```c#

int num = 7, flag = 1;
for (int i = 2; i < num; i++)
{
if (num % i == 0)
{
flag = 0;
break;
}
}
Console.Write(flag == 1 ? "Prime" : "Not Prime");


```

```yml

Answer: prime

```



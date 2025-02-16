# .NET Evaluation

## Instructions

- The evaluation consist of two parts
    - MCQ
    - Coding
- Add the files to repo and submit the repo link.

## **MCQ (30 minutes)**

### **1. Which of the following is the correct syntax to define a class in C#?**

- a) `class MyClass { }`
- b) `class: MyClass { }`
- c) `class MyClass() { }`
- d) `MyClass class { }`

---

### **2. What is the default access modifier for members of a class in C#?**

- a) `public`
- b) `private`
- c) `protected`
- d) `internal`

---

### **3. Which of the following is true about constructors in C#?**

- a) A constructor has a return type.
- b) A constructor can have the same name as the class.
- c) Constructors cannot be overloaded.
- d) A constructor must always be public.

---

### **4. What is the result of the following code?**

```csharp
class MyClass {
    public int x = 5;
}

class Program {
    static void Main() {
        MyClass obj = new MyClass();
        Console.WriteLine(obj.x);
    }
}

```

- a) Error, obj is not initialized.
- b) 0
- c) 5
- d) Compilation error.

---

### **5. What is the purpose of the `this` keyword in C#?**

- a) It refers to the class itself.
- b) It is used to access the instance members of the current object.
- c) It refers to the static members of the class.
- d) It is used to inherit a class.

---

### **6. Which of the following is an example of a property in a C# class?**

- a) `public int x;`
- b) `public int x { get; set; }`
- c) `public void SetX(int value) { x = value; }`
- d) `public void X(int value) { x = value; }`

---

### **7. What will happen if you try to access a private member of a class from outside that class in C#?**

- a) Compilation error
- b) The member will be accessed, but a warning will be shown
- c) Runtime exception
- d) It will be allowed if the member is inside a method

---

### **8. Which of the following statements is correct about the C#.NET code snippet given below?**

```csharp
int i;
int j = new int();
i = j = ;
String str;
str = i.ToString();
str = j.ToString();

```

1. This is a perfectly workable code snippet.
2. Since `int` is a primitive, we cannot use `new` with it.
3. Since an `int` is a primitive, we cannot call the method `ToString()` using it.
4. `i` will get created on stack, whereas `j` will get created on heap.
5. Both `i` and `j` will get created on heap.

---

### **Which of the following statements are correct about the `this` reference?**

1. `this` reference can be modified in the instance member function of a class.
2. Static functions of a class never receive the `this` reference.
3. Instance member functions of a class always receive a `this` reference.
4. `this` reference continues to exist even after control returns from an instance member function.
5. While calling an instance member function we are not required to pass the `this` reference explicitly.

---

### **Which of the following is the correct way to create an object of the `class Sample`?**

1. `Sample s = new Sample();`
2. `Sample s;`
3. `Sample s; s = new Sample();`
4. `s = new Sample();`

---

## **Coding (2.5 hr)**

### **Arrays**

1. Implement a method to find the subarray with the maximum sum (Kadane’s Algorithm) in a given integer array.
2. Write a program to find the intersection and union of two unsorted arrays without using built-in functions.
3. Implement a sparse matrix multiplication algorithm using a 2D array in C#.
4. Write a method to find the first missing positive integer in an unsorted array (without sorting).
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
# SQL Practical Questions and Dataset - Day 02

## Practical Questions

### Easy Level

1. What is a **primary key** in a database, and why is it important? Provide an example using the `students` table.

2. What does the `SELECT` statement do in MySQL? Write a query to retrieve all records from the `students` table.

3. How do you insert data into a table using MySQL? Insert a new student **(id: 5, name: Emily, age: 21)** into the `students` table.

4. What is the purpose of a **foreign key**? Explain with respect to the `orders` table.

5. How can you delete a record from the `students` table where the **id = 2**?

6. What is the difference between `DELETE` and `TRUNCATE` in SQL? Provide an example.

7. How can you update a student's age? Write a query to update **Charlie’s age to 21** in the `students` table.

### Medium Level

1. Why do we need tabular data instead of storing everything in a single file? Explain the benefits using the `students` and `orders` tables.

2. Understanding **database relationships**, how does the `customer_id` in the `orders` table relate to the `id` in the `students` table? Why is this important?

3. Write an SQL query to find all orders placed after **January 12, 2025.**

4. Write an SQL query to delete all records from the `orders` table where the `order_status` is "Cancelled".

### Hard Level

1. Write an SQL query to find the total number of orders placed by each student, showing the results in **ascending order of total orders.**

2. Write an SQL query to display all students who **have not placed any orders.**

## Dataset

### students.csv

| id  | name    | age |
|-----|---------|-----|
| 1   | Alice   | 22  |
| 2   | Bob     | 17  |
| 3   | Charlie | 20  |
| 4   | Diana   | 19  |

### orders.csv

| order_id | customer_id | order_date | order_status |
|----------|-------------|------------|--------------|
| 101      | 1           | 2025-01-10 | Delivered    |
| 102      | 2           | 2025-01-12 | Cancelled    |
| 103      | 1           | 2025-01-15 | Delivered    |
| 104      | 3           | 2025-01-18 | Pending      |

---

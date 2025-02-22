## EASY

**QUE-01:-** What is a primary key in a database, and why is it important? Provide an example using the students table.

- **Answer:-** 

    A primary key is a uni**que identifier for** each record in a database table, ensuring that no two rows have the same value in the key column. It is crucial for maintaining data integrity and enabling efficient retrieval of data.

    **Example using the `students` table:**

    ```sql
    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(100),
        age INT
    );
    ```

**QUE-02:-** What does the SELECT statement do in MySQL? Write a query to retrieve all records from the students table.

- **Answer:-**

    The `SELECT` statement in MySQL is used to retrieve data from one or more tables.

    **Example Query:**
    ```sql
    SELECT * FROM students;
    ```

**QUE-03:-** How do you insert data into a table using MySQL? Insert a new student (id: 5, name: Emily, age: 21) into the students table. 

- **Answer:-**

    ### Inserting Data
    **Example Query:**
    ```sql
    INSERT INTO students (id, name, age) VALUES (5, 'Emily', 21);
    ```


**QUE-04:-** What is the purpose of a foreign key? Explain with respect to the orders table.

- **Answer:-**

    ### Foreign Key
    A foreign key links rows between tables, ensuring referential integrity. In the `orders` table, `customer_id` could be a foreign key referencing the `id` in the `students` table.


**QUE-05:-** How can you delete a record from the students table where the id = 2?

- **Answer:-**

    ### Deleting a Record
    **Example Query:**
    ```sql
    DELETE FROM students WHERE id = 2;
    ```

**QUE-06:-** What is the difference between DELETE and TRUNCATE in SQL? Provide an example.

- **Answer:-**

    ### DELETE vs. TRUNCATE
    - **DELETE:** Removes specified rows; can use WHERE clause.
    - **TRUNCATE:** Removes all rows; cannot use WHERE clause.

    **Examples:**
    ```sql
    DELETE FROM students WHERE id = 2;
    TRUNCATE TABLE students;
    ```

**QUE-07:-** How can you update a student's age? Write a query to update Charlie’s age to 21 in the students table.

- **Answer:-**

    ### Updating Data
    **Example Query:**
    ```sql
    UPDATE students SET age = 21 WHERE name = 'Charlie';
    ```



## Medium Level

**QUE-01:-** Why do we need tabular data instead of storing everything in a single file? Explain the benefits using the students and orders tables.

- **Answer:-**

    ### Tabular Data Benefits
    Tabular data organizes information efficiently, allowing for easier querying, analysis, and data integrity. Using separate `students` and `orders` tables, we avoid data duplication and can update records independently.

**QUE-02:-** Understanding database relationships, how does the customer_id in the orders table relate to the id in the students table? Why is this important?

- **Answer:-**

    ### Database Relationships
    `customer_id` in the `orders` table relates to `id` in the `students` table, creating a link between orders and the students who placed them. This ensures data consistency and enables complex queries.

**QUE-03:-** Write an SQL query to find all orders placed after January 12, 2025.

- **Answer:-**

    **Find orders placed after January 12, 2025:**
    ```sql
    SELECT * FROM orders WHERE order_date > '2025-01-12';
    ```


**QUE-04:-** Write an SQL query to delete all records from the orders table where the order_status is "Cancelled".

- **Answer:-**

    **Delete orders where order_status is "Cancelled":**
    ```sql
    DELETE FROM orders WHERE order_status = 'Cancelled';
    ```



## Hard Level
**QUE-01:-** Write an SQL query to find the total number of orders placed by each student, showing the results in ascending order of total orders.

- **Answer:-**

    ### Total Orders by Each Student
    ```sql
    SELECT customer_id, COUNT(*) AS total_orders
    FROM orders
    GROUP BY customer_id
    ORDER BY total_orders ASC;
    ```

**QUE-02:-** Write an SQL query to display all students who have not placed any orders.

- **Answer:-**

    ### Students with No Orders
    ```sql
    SELECT * 
    FROM students 
    WHERE id NOT IN (SELECT DISTINCT customer_id FROM orders);
    ```

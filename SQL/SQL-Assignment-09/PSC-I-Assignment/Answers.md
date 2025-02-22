
# Easy Level

## Question-01 - Understanding JOINS (Theoretical)

### **1. INNER JOIN (Common Data in Both Tables)**  
- **Returns**: Only matching rows from both tables.  
- **Example**: Students who have taken an exam.  
✅ Includes students with exam records.  
❌ Excludes students without exams.  

---

### **2. LEFT JOIN (All from Left + Matching from Right)**  
- **Returns**: All rows from the left table and matching rows from the right.  
- **Example**: Employees with their department names.  
✅ Includes all employees.  
❌ Employees without a department show NULL.  

---

### **3. RIGHT JOIN (All from Right + Matching from Left)**  
- **Returns**: All rows from the right table and matching rows from the left.  
- **Example**: Patients and their assigned doctors.  
✅ Includes all patients.  
❌ Patients without doctors show NULL.  

---

### **4. FULL OUTER JOIN (Everything from Both Tables)**  
- **Returns**: All rows from both tables, filling gaps with NULLs.  
- **Example**: Customers and their orders.  
✅ Includes all customers and all orders.  
❌ Shows NULL for unmatched records.

---

### **Summary Table**

| **Join Type** | **Includes from Table 1** | **Includes from Table 2** | **Unmatched Rows?** |
|-------------|------------------|------------------|----------------|
| **INNER JOIN** | ✅ Matches only | ✅ Matches only | ❌ No unmatched rows |
| **LEFT JOIN** | ✅ All rows | ✅ Matching only | ✅ NULLs for non-matching right table rows |
| **RIGHT JOIN** | ✅ Matching only | ✅ All rows | ✅ NULLs for non-matching left table rows |
| **FULL OUTER JOIN** | ✅ All rows | ✅ All rows | ✅ NULLs where no match |

## Question-02 - Customers & Orders

- Retrieve all customers who have placed an order.

    ```sql
    SELECT DISTINCT c.customer_id, c.name, c.email
    FROM customers c
    INNER JOIN orders o ON c.customer_id = o.customer_id;
   ```
    

- List orders along with the customer names.

    ```sql
    SELECT o.order_id, c.name, o.total_amount, o.order_date
    FROM orders o
    LEFT JOIN customers c ON o.customer_id = c.customer_id;
    ```
- Find customers who haven’t placed any orders.

    ```sql
    SELECT c.customer_id, c.name, c.email
    FROM customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
    WHERE o.customer_id IS NULL -- or we can use o.order_id instead of o.customer_id;
    ```
## Question-03 - Employees & Departments

- Retrieve all employees and their department names, ensuring employees without a department are still listed.

    ```sql
    SELECT e.emp_id, e.name, e.department_id, e.salary d.dept_name
    FROM employees e
    LEFT JOIN department d ON d.department_id = e.department_id;
    ```
- Find departments that have no employees.
    ```sql
    SELECT d.dept_name
    FROM departments d
    LEFT JOIN employees e ON d.department_id = e.department_id
    WHERE  e.department_id IS NULL;
    ```
## Question-04 - Filtering with Aggregation & JOIN

- Retrieve the average grade per course.
    ```sql
    SELECT c.course_id, c.title, AVG(e.grade) AS avg_grade
    FROM courses c
    JOIN enrollments e ON c.course_id = e.course_id
    GROUP BY c.course_id, c.title;

    ```

- List students who are not enrolled in any courses.
    ```sql
    SELECT s.student_id, s.name
    FROM students s
    LEFT JOIN enrollments e ON e.student_id = s.student_id
    WHERE e.course_id IS NULL;
    ```
- Find students who scored above the course average grade.
    ```sql
    SELECT 
    s.student_id, 
    s.name, 
    c.title AS course_title, 
    e.grade, 
    course_avg.AVG_grade
    FROM enrollments e
    JOIN students s ON e.student_id = s.student_id
    JOIN courses c ON e.course_id = c.course_id
    JOIN (
        -- Subquery to calculate average grade for each course
        SELECT course_id, AVG(grade) AS AVG_grade
        FROM enrollments
        GROUP BY course_id
    ) course_avg ON e.course_id = course_avg.course_id
    WHERE e.grade > course_avg.AVG_grade;

    ```

## Medium Level (Complex JOINS & Aggregations)

## Question-01


- Retrieve all employees with their department name and manager details.
    ```sql
    SELECT e.emp_id,e.name, d.dept_name, m.manager_name
    FROM employees e
    JOIN departments d ON d.department_id = e.department_id
    JOIN managers m ON m.manager_id = e.manager_id;
    ```
- Find departments that do not have a manager assigned.
    ```sql
    SELECT department_id, dept_name
    FROM departments
    WHERE manager_id IS NULL;
    ```
- Retrieve employees who earn more than their department’s average salary.
    ```sql
    SELECT 
    e.emp_id, 
    e.name, 
    e.salary, 
    d.dept_name, 
    dept_avg.Dept_avg_salary
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    JOIN (
        -- Subquery to calculate department-wise average salary
        SELECT department_id, AVG(salary) AS Dept_avg_salary
        FROM employees
        GROUP BY department_id
    ) dept_avg ON e.department_id = dept_avg.department_id
    WHERE e.salary > dept_avg.Dept_avg_salary;

    ```
## Question-02 - Product Sales Analysis with JOINS

- Retrieve all products that have never been sold.
    ```sql
    SELECT p.product_id, p.product_name, p.category
    FROM products p
    LEFT JOIN order_items oi ON p.product_id = oi.product_id
    WHERE oi.product_id IS NULL;
    ```
- Find the top 3 best-selling products based on total quantity sold.
    ```sql
    SELECT 
    p.product_id, 
    p.product_name, 
    SUM(oi.quantity) AS total_quantity_sold
    FROM order_items oi
    JOIN products p ON oi.product_id = p.product_id
    GROUP BY p.product_id, p.product_name
    ORDER BY total_quantity_sold DESC
    LIMIT 3;

    ```
- Get the total revenue per product category.
    ```sql
    SELECT 
    p.category, 
    SUM(oi.quantity * oi.price) AS total_revenue
    FROM order_items oi
    JOIN products p ON oi.product_id = p.product_id
    GROUP BY p.category
    ORDER BY total_revenue DESC;

    ```
## Question-03 - Advanced Filtering with JOINS: Employee Performance

- Retrieve all employees and the projects they are working on.
    ```sql
    SELECT 
    e.emp_id, 
    e.name, 
    p.project_id, 
    p.project_name, 
    ep.role
    FROM employees e
    JOIN employee_projects ep ON e.emp_id = ep.emp_id
    JOIN projects p ON ep.project_id = p.project_id;
    ```
- Find employees who are not assigned to any project.
    ```SQL
    SELECT e.emp_id, e.name
    FROM employees e
    LEFT JOIN employee_projects ep ON e.emp_id = ep.emp_id
    WHERE ep.project_id IS NULL;
    ```
- List projects that have no employees assigned.
    ```sql
    SELECT p.project_id, p.project_name
    FROM projects p
    LEFT JOIN employee_projects ep ON p.project_id = ep.project_id
    WHERE ep.emp_id IS NULL;

    ```
## Question-04 - Customer Order Behavior Analysis
- Find customers who have placed more than 5 orders.
    ```sql
    SELECT c.customer_id, c.name, COUNT(o.order_id) AS total_orders
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.name
    HAVING COUNT(o.order_id) > 5;
    ```
- Retrieve the total amount spent per customer.
    ```sql
    SELECT c.customer_id, c.name, SUM(o.total_amount) AS total_spent
    FROM customers c
    JOIN orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.name
    ORDER BY total_spent DESC;
    ```
- Get customers who haven’t placed any orders in the last 6 months.
    ```sql
    SELECT c.customer_id, c.name
    FROM customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
    WHERE o.order_date IS NULL 
    OR o.order_date < DATE_SUB(CURDATE(), INTERVAL 6 MONTH);

    ```

## Question-05 - Mastering Aggregations with HAVING & JOINS

## Question-01
## Question-02
## Question-03
## Question-04
## Question-05



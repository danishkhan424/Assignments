-- EASY

-- QUE-01: Find all employees whose name starts with the letter "J."

-- Answer:
-- SELECT * FROM employees WHERE name LIKE 'J%';

-- QUE-02: Retrieve all employees who are older than 30 years.

-- Answer:
-- SELECT * FROM employees WHERE age > 30;

-- QUE-03: Find the employees who work in the HR department and earn more than $55,000.

-- Answer:
-- SELECT * FROM employees WHERE department = 'HR' AND salary > 55000;

-- QUE-04: Find all products in the Products table where the product name contains "head."

-- Answer:
-- SELECT * FROM products WHERE productname LIKE '%head%';

-- QUE-05: List the products whose price is between $50 and $100.

-- Answer:
-- SELECT * FROM products WHERE price BETWEEN 50 AND 100;

-- QUE-06: Find all employees whose name ends with the letter "n."

-- Answer:
-- SELECT * FROM employees WHERE name LIKE '%n';

-- Medium Level

-- QUE-01: Find products where the price is between $50 and $200, and the discount is greater than 10%.

-- Answer:
-- SELECT * FROM products WHERE price BETWEEN 50 AND 200 AND discount > 10;

-- QUE-02: Retrieve the total quantity of all products in the Products table.

-- Answer:
-- SELECT SUM(quantity) AS total_quantity FROM products;

-- QUE-03: Find employees whose age is between 25 and 35.

-- Answer:
-- SELECT * FROM employees WHERE age BETWEEN 25 AND 35;

-- QUE-04: Retrieve all products where the product name contains the letter "o" but does not end with "s."

-- Answer:
-- SELECT * FROM products WHERE productname LIKE '%o%' AND productname NOT LIKE '%s';

-- Hard Level

-- QUE-01: Retrieve the highest salary among employees who have been hired after 2020, and display the employee name and salary.

-- Answer:
-- SELECT name, salary 
-- FROM employees 
-- WHERE hiredate > '2020-01-01' 
-- ORDER BY salary DESC 
-- LIMIT 1;

-- QUE-02: Calculate the total discounted price for each product after applying the discount, and retrieve products where the discounted price is greater than $100.

-- Answer:
-- SELECT productname, price * (1 - discount / 100) AS discounted_price 
-- FROM products 
-- HAVING discounted_price > 100;

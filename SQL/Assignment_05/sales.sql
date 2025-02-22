CREATE DATABASE salesDB;
use salesDB;

select * from sale;


-- 1. Basic GROUP BY and Aggregation
SELECT Category, SUM(Sales) AS total_sales 
FROM sale 
GROUP BY Category;

-- 2. Basic ORDER BY
-- Retrieve all sales ordered by sale_amount in descending order
SELECT * FROM sale 
ORDER BY Sales DESC;

-- List all sales in the 'Food Grains' category, sorted in ascending order by Order ID
SELECT * FROM sale 
WHERE Category = 'Food Grains' 
ORDER BY Order ID ASC;

-- 3. Basic LIMIT Clause
-- Retrieve the top 5 most expensive sales
SELECT * FROM sale 
ORDER BY Sales DESC 
LIMIT 5;

-- Fetch any 10 random sales transactions
SELECT * FROM sale 
ORDER BY RAND() 
LIMIT 10;

-- 4. Combining ORDER BY and LIMIT
-- Retrieve the top 3 highest revenue-generating Customer Name
SELECT `Customer Name`, SUM(Sales) AS total_revenue 
FROM sale 
GROUP BY `Customer Name` 
ORDER BY total_revenue DESC 
LIMIT 3;

-- 5. Basic Execution Order Understanding
-- Filter sales above $3000, then group by Category, and order by total sales
SELECT Category, SUM(Sales) AS total_sales 
FROM sale 
WHERE Sales > 3000 
GROUP BY Category 
ORDER BY total_sales DESC;

-- 6. Basic GROUP BY with Filtering
-- Retrieve total sales per Region, but only include Regions where total sales exceed $10,000
SELECT Region, SUM(Sales) AS total_sales 
FROM sale 
GROUP BY Region 
HAVING total_sales > 10000;

-- 7. GROUP BY with Multiple Aggregations
-- Find the highest, lowest, and average Sales per Category
SELECT Category, 
       MAX(Sales) AS highest_sale, 
       MIN(Sales) AS lowest_sale, 
       AVG(Sales) AS avg_sale 
FROM sale 
GROUP BY Category;

-- 8. Advanced ORDER BY & LIMIT Use Case
-- Retrieve the 5 most recent sales
SELECT * FROM sale 
ORDER BY STR_TO_DATE(`Order Date`, '%d-%m-%Y') DESC 
LIMIT 5;

-- Get the top 3 largest transactions per Region
SELECT Region, Order ID, Sales 
FROM (
    SELECT Region, `Order ID`, Sales, 
           RANK() OVER (PARTITION BY Region ORDER BY Sales DESC) AS rnk 
    FROM sale
) AS ranked_sales
WHERE rnk <= 3;

-- 9. Logical Optimization of Query Execution
-- Retrieve the top 10 Regions contributing to total sales
SELECT Region, SUM(Sales) AS total_sales 
FROM sale 
GROUP BY Region 
ORDER BY total_sales DESC 
LIMIT 10;

-- 10. Advanced GROUP BY with HAVING
-- Retrieve Categories with total sales exceeding $20,000
-- Sort by total sales in descending order and return the top 3 Categories
SELECT Category, SUM(Sales) AS total_sales 
FROM sale 
GROUP BY Category 
HAVING total_sales > 20000 
ORDER BY total_sales DESC 
LIMIT 3;

-- 11. Complex GROUP BY, HAVING, ORDER BY, and LIMIT
-- Find the top 3 Regions where total sales exceeded 2,000, sorted in descending order
SELECT Region, SUM(Sales) AS total_sales 
FROM sale 
GROUP BY Region 
HAVING total_sales > 2000 
ORDER BY total_sales DESC 
LIMIT 3;

-- Retrieve Categories with the highest sales per Region
SELECT Region, Category, total_sales
FROM (
    SELECT Region, Category, SUM(Sales) AS total_sales, 
           RANK() OVER (PARTITION BY Region ORDER BY SUM(Sales) DESC) AS rnk 
    FROM sale 
    GROUP BY Region, Category
) AS ranked_sales
WHERE rnk = 1;

-- 12. Challenging Query Optimization Task
-- Optimized query to get the top 3 transactions (sales) in terms of Sales
SELECT * FROM sale 
ORDER BY Sales DESC 
LIMIT 3;

-- Creating an index for better performance
CREATE INDEX idx_sales_amount ON sale(Sales DESC);

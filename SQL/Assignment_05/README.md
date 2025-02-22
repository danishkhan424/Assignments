# SQL Assignment - Day 05

## Dataset


We will use a single dataset for all questions. Assume the following table structure with at least 100 rows. 

### Sales Data (sales)

Dataset Reference: Use [Retail Sales Data](https://www.kaggle.com/datasets/mohamedharris/supermart-grocery-sales-retail-analytics-dataset) for realistic queries. 

## Assignment Questions

### Easy Level

1. **Basic GROUP BY and Aggregation:** 
    - Find the total `sale_amount` per `category`.
2. **Basic ORDER BY:** 
    - Retrieve all sales ordered by `sale_amount` in descending order. 
    - List all sales in the 'Food Grains' category, sorted in ascending order by `order_id`.
3. **Basic LIMIT Clause:** 
    - Retrieve the top 5 most expensive sales. 
    - Fetch any 10 random sales transactions.
4. **Combining ORDER BY and LIMIT:** 
    - Retrieve the top 3 highest revenue-generating `customer_name`.
5. **Basic Execution Order Understanding:** 
    - Write a query that first filters sales above $3000, then groups by `category`, and orders by total sales.
6. **Basic GROUP BY with Filtering:** 
    - Retrieve total sales per `region`, but only include regions where total sales exceed $10,000.

### Medium Level

7. **GROUP BY with Multiple Aggregations:** 
    - Find the highest, lowest, and average `sale_amount` per `category`.
8. **Advanced ORDER BY & LIMIT Use Case:** 
    - Retrieve the 5 most recent sales. 
    - Get the top 3 largest transactions per `region`.
9. **Logical Optimization of Query Execution:** 
    - Retrieve the top 10 regions contributing to total sales.
10. **Advanced GROUP BY with HAVING:** 
    - Retrieve `category` with total sales exceeding $20,000. 
    - Sort by total sales in descending order and return the top 3 categories.

### Hard Level

11. **Complex GROUP BY, HAVING, ORDER BY, and LIMIT:** 
    - Find the top 3 `regions` where total sales exceeded 2,000, sorted in descending order. 
    - Retrieve `categories` with the highest sales per region.
12. **Challenging Query Optimization Task:** 
    - Optimize a query to get the top 3 transactions (sales) in terms of `sale_amount`.

## Submission Guidelines

- **Export Results:**
  - Save queries as `.sql` files.
  - Export query results from MySQL Workbench.

- **Upload & Share:**
  - Make one folder on your Drive and upload all your answer files in that folder.
  - Share the folder link.

---

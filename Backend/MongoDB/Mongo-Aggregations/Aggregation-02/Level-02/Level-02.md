## Problem Statements
Q1. Write Mongo query to retrieve documents from the orders in ascending order by total.
	Ans=>	db.orders.aggregate([{$group: {_id: "$total"}}, {$sort: {total: 1}}])

Q2. Write Mongo query to retrieve the oldest paymentMethod from the payments collection as "_id".
	Ans=>	db.payments.aggregate([{$group: {_id: "$paymentMethod"}}, {$sort: {payment_date: 1}}])

Q3. Write Mongo query to retrieve 2nd and 3rd buyers from the buyers collection.
	Ans=> 	db.buyers.aggregate([{$limit: 2}, {$skip: 1}])

Q4. Write Mongo query to retrieve the most Expensive product from order_details.
	Ans=>	db.products.aggregate([{$group: {_id: "$price"}}, {$sort: {price: 1}}])

Q5. Write Mongo query to retrieve the first order from the orders as per the order_date.
	Ans=>	db.orders.aggregate([{$group: {_id: "$_id"}}, {$sort: {order_date: 1}}, {$limit: 1}])

Q6. Write Mongo query to retrieve the last 3 orders from the orders collection who have less total amount.
	Ans=>	db.orders.aggregate([{$sort: {order_date: -1}}, {$limit: 3}, {$project: {order_date:1, total:1}}])

Q7. Write Mongo query to retrieve the most recent shipped order from the orders collection.
	Ans=>	db.orders.aggregate([{$match: {status: {$eq: "shipped"}}}, {$sort: {order_date: -1}}, {$project: {order_date:1, customer_id:1, total:1, status:1}}])

Q8. Write Mongo query to get the total revenue from all orders
	Ans=>	db.orders.aggregate([{$group: {_id: "total", totalRevenue: {$sum: "$total"}}}])

Q9. Write Mongo query to retrieve all the orders that shipped before 2022-05-26
	Ans=>	db.orders.aggregate([{$match: {status: "shipped", order_date: {$lt: "2022-05-26"}}}])

Q10. Write Mongo query to find the maximum price as maxPrice of products and their names as name for each category.
	Ans=>	db.products.aggregate([{$group: {_id: "$category_id", maxPrice: {$max: "$price"}, name: {$first: "$name"}}}, {$sort: {maxPrice:-1}}])

Q11. Write Mongo query to find Most used payment Method as paymentMethod and the number of time it is used as count.
	Ans=>	db.payments.aggregate([{$group: {_id: "$paymentMethod", count: {$sum: 1}}}, {$sort: {count:-1}}])

Q12. Write Mongo query to find the total count of orders by status.
	Ans=>	db.orders.aggregate([{$group: {_id: "$status", count: {$sum: 1}}}, {$sort: {count:-1}}])

Q13. Write Mongo query to retrieve the orders grouped by customer_id with the max total
	Ans=>	db.orders.aggregate([{$group: {_id: "$customer_id", maxTotal: {$max: "$total"}}}, {$sort: {maxTotal:-1}}])

14.Assess the impact of RAM capacity on laptop prices and ratings. Group laptops by RAM capacity and analyze the average price and rating for each group. Identify any significant trends or outliers.
	Ans=>

15.Investigate the price and rating distribution for gaming laptops. Identify which brands are leading in the gaming laptop market by comparing the average price, rating, GPU type, and RAM capacity for laptops categorized as gaming.
	Ans=>

16.Analyze the warranty periods offered by different brands and their correlation with laptop prices and ratings. Identify any patterns or insights regarding how warranty periods influence consumer ratings and pricing strategies.
	Ans=>

17.Examine the relationship between processor brand (Intel, AMD, Apple) and laptop price, rating, and primary storage capacity. Group the laptops by processor brand and compare their average price, rating, and storage statistics to identify key differences.
	Ans=>

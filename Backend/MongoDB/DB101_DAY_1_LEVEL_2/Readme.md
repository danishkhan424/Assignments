
### Find Queries

Q1. Find all documents where the gender is 'Male' and salary is less than or equal to 70000.

	1. Retrieve Male Employees with Salary <= 70000: `db.Employees.find({$and: [{gender: "Male"}, {salary: {$lte: 70000}}]})`

Q2. Retrieve documents where the age is greater than or equal to 30 and the last name is not 'Bestall'

	1. Fetch Documents with Age >= 30 and Last Name Not 'Bestall': `db.Employees.find({$and: [{age: {$gte:30}}, {last_name: {$ne:"Bestall"}}]})`

Q3. Find all documents where the gender is 'Female' and (age is greater than 40 or salary is less than 80000).

	1. Find Female Employees with (Age > 40 or Salary < 80000): `db.Employees.find({gender: "Female", $or: [{age: {$gt:40}},{salary: {$lt:80000}}]})`

Q4. Retrieve all documents where the salary is greater than 100000.

	1. Retrieve Documents where Salary > 100000: `db.Employees.find({salary: {$gt: 100000}})`

Q5. Find all documents where the age is equal to 30.

	1. Find Employees with Age = 30: `db.Employees.find({age: {$eq:30}})`

Q6. Retrieve documents where the salary is less than 75000.

	1. Retrieve Documents where Salary < 75000: `db.Employees.find({salary: {$lt:75000}})`

Q7. Find all documents where the age is less than 35 and the salary is greater than or equal to 80000.

	1. Find Employees with Age < 35 and Salary >= 80000: `db.Employees.find({$and: [{age: {$lt:35}},{salary: {$gte:80000}}]})`

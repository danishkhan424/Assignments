### Create Database, Collection and Insert Data
Q1. Create a Database called Unit2
	Ans=> use Unit2

Q2. Create a collection called Employees
	Ans=> db.createCollection("Employees")

Q3. Insert the below file's data in mongoDB:- Employees.json
	Ans=> db.Employees.insertMany([{},{},{}...{}])

### Find Queries

Q01. Find a document with the first name 'Danit' from the collection.
	Ans=> db.Employees.find({first_name: "Danit"})

Q02. Fetch all documents where the age is greater than or equal to 30.
	Ans=> db.Employees.find({age: {$gte: 30}})

Q03. Retrieve all documents where the salary is less than or equal to 70000
	Ans=> db.Employees.find({salary: {$lte: 70000}})

Q04. Find all documents where the age is greater than 30 and the salary is less than 90000.

	Ans=>db.Employees.find({$and: [{age: {$gt:30}}, {salary: {$lt:90000}}]})

Q05. Retrieve all documents where the gender is 'Female' and the age is less than 25.

	Ans=>db.Employees.find({$and: [{gender: "Female"}, {age: {$lt:25}}]})

Q06. Find all documents where the last name is 'Bestall' or the salary is greater than 80000.

	Ans=> db.Employees.find({$or: [{last_name: "Bestall"}, {salary: {$gt:80000}}]})

Q07. Retrieve all documents where the gender is 'Male' and (age is less than 25 or salary is greater than 80000).

	Ans=> db.Employees.find({gender: "Male", $or: [{age: {$lt: 25}}, {salary: {$gt: 80000}}]})

Q08. Add a new student named 'Bob' with a last name 'Smith', male gender, age 22, and a salary of 60000 to the collection.

	Ans=> db.Employees.insertOne({first_name: "Bob", last_name: "Smith", gender: "Male", age: 22, salary: 80000})

Q09. Retrieve all documents where the gender is 'Male' and age is greater than 40.

	Ans=>db.Employees.find({$and: [{gender: "Male"}, {age: {$gt:40}}]})

Q10. Find all documents where the last name is not 'Bestall' or the salary is less than 80000.

	Ans=> db.Employees.find({$or: [{last_name: "Bestall"}, {salary: {$lt:80000}}]})


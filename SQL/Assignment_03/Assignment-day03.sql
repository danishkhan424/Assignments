-- Easy SQL QUE 
-- QUE 1. SELECT StudentID, (MathScore + ScienceScore) AS TotalScore FROM studentscores;
-- QUE 2. SELECT StudentID, (TotalClasses - DaysAbsent) AS AttendedClasses FROM studentscores;
-- QUE 3. SELECT StudentID, ((TotalClasses - DaysAbsent) * 2) AS TotalStudyHours FROM studentscores;
-- QUE 4. SELECT StudentID, (MathScore + ScienceScore) / 2 AS AverageScore FROM StudentScores;
-- QUE 5. SELECT StudentID, (MathScore + ScienceScore) AS TotalScore FROM StudentScores WHERE (MathScore + ScienceScore) > 160;
-- QUE 6. SELECT StudentID, (TotalClasses - DaysAbsent) AS ClassesAttended FROM StudentScores WHERE (TotalClasses - DaysAbsent) > 25;

-- Medium SQL QUE
 
-- QUE 1. SELECT ProductID, ProductName, Price - (Price * Discount / 100) AS DiscountedPrice FROM Products WHERE (Price - (Price * Discount / 100)) > 15;
-- QUE 2. SELECT ProductID, ProductName, (Price * Quantity) AS TotalInventoryValue FROM Products WHERE (Price * Quantity) > 600;
-- QUE 3. SELECT ProductID, ProductName, Price - (Price * Discount / 100) AS DiscountedPrice FROM Products WHERE (Price - (Price * Discount / 100)) < 10;
-- QUE 4. SELECT ProductID, ProductName, Price - (Price * Discount / 100) AS DiscountedPrice FROM Products WHERE (Price - (Price * Discount / 100)) BETWEEN 5 AND 15;

-- Hard SQL QUE 

-- QUE 1. SELECT StudentID, (MathScore + ScienceScore) AS TotalScore,(TotalClasses - DaysAbsent) AS ClassesAttendedFROM StudentScores WHERE (TotalClasses - DaysAbsent) = (SELECT MAX(TotalClasses - DaysAbsent) FROM StudentScores);
-- QUE 2. SELECT ProductID, ProductName, Price - (Price * Discount / 100) AS DiscountedPrice, (Price * Quantity) AS TotalInventoryValue FROM Products WHERE (Price - (Price * Discount / 100)) > 10 AND (Price - (Price * Discount / 100)) < 20 AND (Price * Quantity) > 600;

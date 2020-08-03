USE leetcode;

CREATE TABLE IF NOT EXISTS Employee (
  Id INT NOT NULL,
  Salary INT NOT NULL,
  PRIMARY KEY (Id)
);

/* INSERT INTO Employee (Id, Salary)
VALUES (1, 2000), (2, 3000), (3, 4000); */

/* SELECT * FROM Employee; */

# 编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary） 
SELECT MAX(Salary) SecondHighestSalary
FROM Employee e
WHERE (
  SELECT MAX(Salary) max FROM Employee
) != e.Salary;

# 子查询简介 https://www.jianshu.com/p/a7c850043cc7

/* SHOW DATABASES; */

USE leetcode;
/* SHOW TABLES; */

/* CREATE TABLE IF NOT EXISTS Person (
  PersonId INT NOT NULL,
  FirstName VARCHAR(25) NOT NULL,
  LastName VARCHAR(25) NOT NULL,
  PRIMARY KEY (PersonId)
);

CREATE TABLE IF NOT EXISTS Address (
  AddressId INT NOT NULL,
  PersonId INT NOT NULL,
  City VARCHAR(100) NOT NULL,
  State VARCHAR(100) NOT NULL,
  PRIMARY KEY (AddressId)
) */

# 编写一个 SQL 查询，满足条件：无论 person 是否有地址信息，都需要基于上述两表提供 person 的以下信息
# FirstName, LastName, City, State

# 插入数据
/* INSERT INTO Person (PersonId, FirstName, LastName) VALUES (1, 'F1', 'L1'),(2, 'F2', 'L2'); */
/* INSERT INTO Address (AddressId, PersonId, City, State) VALUES (1, 1, 'SH', 'SH'); */

/* SELECT PersonId, FirstName, LastName FROM Person;
SELECT AddressId, PersonId, City, State FROM Address; */

SELECT p.FirstName FirstName, p.LastName LastName, a.City City, a.State State 
FROM Person p
LEFT JOIN Address a
ON p.PersonId = a.PersonId;

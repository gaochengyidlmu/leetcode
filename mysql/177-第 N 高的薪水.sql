USE leetcode;

/* CREATE TABLE IF NOT EXISTS Employee (
  Id INT NOT NULL,
  Salary INT NOT NULL,
  PRIMARY KEY (Id)
); */

/* INSERT INTO Employee (Id, Salary) 
VALUES (6, 6000), (7, 7000); */

/* SELECT * FROM Employee; */
# 删除重复方法
DROP FUNCTION IF EXISTS getNthHighestSalary;

# 创建函数
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET n = N-1;
  RETURN (     
  SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT n,1
  );
END;
SELECT getNthHighestSalary(2);
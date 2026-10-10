-- Created a database, workshop_lab
CREATE DATABASE workshop_lab;

-- USE allows us to switch DBs
USE workshop_lab;

CREATE TABLE workshops (
	workshop_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(40) NOT NULL,
    seats INT NOT NULL,
    fee DECIMAL(8,2) NOT NULL
);

-- ALTER
ALTER TABLE workshops ADD description VARCHAR(150);
ALTER TABLE workshops ADD description VARCHAR(150) NOT NULL DEFAULT 'Visit us at Location X';
ALTER TABLE workshops DROP COLUMN description;
ALTER TABLE workshops MODIFY description VARCHAR(150) NULL;

INSERT INTO workshops
    (workshop_id, title, category, seats, fee)
VALUES
    (101, 'Intro to Pottery', 'Craft', 12, 1200.00),
    (102, 'Street Photography Walk', 'Photography', 15, 800.00),
    (103, 'Sourdough Basics', 'Food', 10, 1500.00),
    (104, 'Watercolour Landscapes', 'Art', 18, 950.00),
    (105, 'Podcast Storytelling', 'Media', 20, 700.00);

SELECT * FROM workshops;

SELECT title, fee FROM workshops;

DESCRIBE workshops;

-- workshop_id is equal to 101
SELECT title, category, fee
FROM workshops
WHERE workshop_id = 101;

-- category is NOT EQUAL to Photography
SELECT title, category, fee
FROM workshops
WHERE category <> 'Photography';

-- ORDER BY - ASC by default
SELECT title, category, fee
FROM workshops
ORDER BY fee DESC;

SELECT title, category, fee
FROM workshops
ORDER BY fee DESC
LIMIT 3;



SELECT title, fee
FROM workshops
WHERE fee <= 1200
ORDER BY fee ASC
LIMIT 3;


INSERT INTO workshops
    (workshop_id, title, category, seats, fee)
VALUES
    (1, 'Test Workshop', 'Test', 5, 100.00);



UPDATE workshops
SET seats = 12
WHERE workshop_id = 106;

SET SQL_SAFE_UPDATES = 0;

UPDATE workshops
SET seats = 50
WHERE title = 'Test Workshop' and category = 'Test';

SET SQL_SAFE_UPDATES = 1;

-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

SELECT * FROM workshops;

SET SQL_SAFE_UPDATES = 0;
UPDATE workshops
SET seats = 50, description = 'Visit us at Location Y';
SET SQL_SAFE_UPDATES = 1;


-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.

DELETE FROM workshops
WHERE workshop_id = 106;



CREATE TABLE instructors (
	instructor_id INT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    city VARCHAR(35) NOT NULL
);

INSERT INTO instructors
    (instructor_id, name, city)
VALUES
    (1, 'Meera Iyer', 'Bangalore'),
    (2, 'Arujun Rao', 'Mumbai'),
    (3, 'Kavya Menon', 'Delhi');

INSERT INTO instructors
    (instructor_id, name, city)
VALUES
    (4, 'Daniel Roy', 'Kolkata');


select * from instructors;

-- CREATE TABLE workshops (
--	workshop_id INT PRIMARY KEY,
--    title VARCHAR(100) NOT NULL,
--    category VARCHAR(40) NOT NULL,
--    seats INT NOT NULL,
--    fee DECIMAL(8,2) NOT NULL
-- 	  instructor_id INT FK...
-- );

ALTER TABLE workshops ADD instructor_id INT NOT NULL;

-- Foreign key constraint is set
ALTER TABLE workshops
ADD CONSTRAINT fk_instructor_id
FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id);


-- 5 row(s) affected Records: 5  Duplicates: 0  Warnings: 0


INSERT INTO workshops
    (workshop_id, title, category, seats, fee, instructor_id)
VALUES
    (200, 'Test Workshop 2', 'Test', 5, 100.00, 3);

-- Error Code: 1452. Cannot add or update a child row:
-- a foreign key constraint fails (`workshop_lab`.`workshops`, CONSTRAINT `fk_instructor_id`
-- FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`instructor_id`))


-- show each workshop with its instructor
-- select title from the workshop table, name is from the instructor, fee from workshop

-- alias
SELECT w.title, i.name, w.fee
FROM workshops AS w
INNER JOIN instructors AS i ON w.instructor_id = i.instructor_id;

SELECT *
FROM workshops, instructors;

select * from instructors;


SELECT w.title, i.name, w.fee
FROM instructors AS i
LEFT JOIN workshops AS w
	ON w.instructor_id = i.instructor_id;

-- INNER JOIN instructors ON workshops.instructor_id = instructors.instructor_id;

-- and from instructors


-- RIGHT JOIN
SELECT w.title, i.name, w.fee
FROM instructors AS i
RIGHT JOIN workshops AS w
	ON w.instructor_id = i.instructor_id;

select * from workshops;

-- left join workshops with instructors -> filter by the category = 'Art' OR 'Craft'
SELECT *
FROM workshops AS w
LEFT JOIN instructors AS a
	ON w.instructor_id = i.instructor_id
WHERE i.name <> 'Meera Iyer';

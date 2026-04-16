/*1 */
SELECT COUNT(*) FROM actors;
/*2 */
INSERT INTO actors (first_name, last_name) 
VALUES (NULL, 'Smith');
-- Correct way to insert:
INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES ('Will', 'Smith', 55, 2);
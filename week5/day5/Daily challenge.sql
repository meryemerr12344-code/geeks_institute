-- 2. Insertion des données dans FirstTab
INSERT INTO FirstTab VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

-- 3. Affichage de FirstTab
SELECT * FROM FirstTab;

-- 5. Insertion des données dans SecondTab
INSERT INTO SecondTab VALUES
(5),
(NULL);

-- 6. Affichage de SecondTab
SELECT * FROM SecondTab;


-- Q1. Quel sera le résultat ?
-- Prédiction : 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);

-- Q2. Quel sera le résultat ?
-- Prédiction : 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);

-- Q3. Quel sera le résultat ?
-- Prédiction : 0
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab);

-- Q4. Quel sera le résultat ?
-- Prédiction : 2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
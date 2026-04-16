-- =====================================================
-- SCRIPT COMPLET - DVD RENTAL EXERCISES
-- Création des tables + Tous les exercices
-- =====================================================

-- =====================================================
-- PARTIE 1: CRÉATION DES TABLES
-- =====================================================

-- 1. Création de la table language
CREATE TABLE language (
    language_id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des langues
INSERT INTO language (name) VALUES 
('English'),
('Italian'),
('Japanese'),
('Mandarin'),
('French'),
('German'),
('Spanish');

-- 2. Création de la table film
CREATE TABLE film (
    film_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INTEGER,
    language_id INTEGER REFERENCES language(language_id),
    original_language_id INTEGER REFERENCES language(language_id),
    rental_duration SMALLINT DEFAULT 3,
    rental_rate DECIMAL(4,2) DEFAULT 4.99,
    length SMALLINT,
    replacement_cost DECIMAL(5,2) DEFAULT 19.99,
    rating VARCHAR(10) DEFAULT 'PG',
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des films
INSERT INTO film (title, description, language_id, rental_rate, replacement_cost, length, rating) VALUES
('The Sumo Wrestler', 'A documentary about sumo wrestling stars and their journey to become champions', 1, 4.99, 29.99, 90, 'PG-13'),
('Boat Adventure', 'Exciting journey on a mysterious fishing boat in the deep ocean', 1, 5.99, 49.99, 120, 'R'),
('Short Documentary', 'A brief look at nature and wildlife in Africa', 1, 3.99, 15.99, 45, 'R'),
('The Matrix', 'A computer hacker learns about the true nature of reality and his role in the war against its controllers', 1, 4.99, 24.99, 136, 'R'),
('Inception', 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea', 1, 5.99, 29.99, 148, 'PG-13'),
('The Dark Knight', 'Batman faces the Joker in Gotham City', 1, 4.99, 24.99, 152, 'PG-13'),
('Pulp Fiction', 'The lives of two mob hitmen, a boxer, and a gangster''s wife intertwine in four tales of violence and redemption', 1, 4.99, 19.99, 154, 'R'),
('Forrest Gump', 'The presidencies of Kennedy and Johnson, the Vietnam War, and more', 1, 3.99, 19.99, 142, 'PG-13'),
('Speed Boat', 'A thrilling chase on a high-speed boat', 1, 6.99, 59.99, 110, 'R'),
('Boat Story', 'A dramatic story about life on a boat', 1, 4.99, 39.99, 95, 'PG-13');

-- 3. Création de la table actor
CREATE TABLE actor (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des acteurs
INSERT INTO actor (first_name, last_name) VALUES
('Penelope', 'Monroe'),
('Matthew', 'Mahan'),
('John', 'Travolta'),
('Keanu', 'Reeves'),
('Leonardo', 'DiCaprio'),
('Tom', 'Hardy'),
('Samuel', 'Jackson'),
('Bruce', 'Willis');

-- 4. Création de la table film_actor (relation many-to-many)
CREATE TABLE film_actor (
    actor_id INTEGER REFERENCES actor(actor_id) ON DELETE CASCADE,
    film_id INTEGER REFERENCES film(film_id) ON DELETE CASCADE,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (actor_id, film_id)
);

-- Insertion des relations films-acteurs
INSERT INTO film_actor (actor_id, film_id) VALUES
(1, 1), -- Penelope Monroe dans The Sumo Wrestler
(2, 3), -- Matthew Mahan dans Short Documentary
(2, 4), -- Matthew Mahan dans The Matrix
(2, 5), -- Matthew Mahan dans Inception
(2, 9), -- Matthew Mahan dans Speed Boat
(2, 10), -- Matthew Mahan dans Boat Story
(3, 7), -- John Travolta dans Pulp Fiction
(4, 4), -- Keanu Reeves dans The Matrix
(5, 5), -- Leonardo DiCaprio dans Inception
(6, 5); -- Tom Hardy dans Inception

-- 5. Création de la table customer
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    store_id INTEGER NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(50),
    address_id INTEGER,
    activebool BOOLEAN DEFAULT true,
    create_date DATE DEFAULT CURRENT_DATE,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    active INTEGER DEFAULT 1
);

-- Insertion des clients
INSERT INTO customer (first_name, last_name, store_id, address_id, email) VALUES
('Matthew', 'Mahan', 1, 1, 'matthew.mahan@email.com'),
('John', 'Smith', 1, 2, 'john.smith@email.com'),
('Sarah', 'Johnson', 1, 3, 'sarah.j@email.com'),
('Emily', 'Brown', 2, 4, 'emily.brown@email.com');

-- 6. Création de la table inventory
CREATE TABLE inventory (
    inventory_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES film(film_id) ON DELETE CASCADE,
    store_id INTEGER NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de l'inventaire
INSERT INTO inventory (film_id, store_id) VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1), 
(6, 1), (7, 1), (8, 1), (9, 1), (10, 1),
(1, 2), (2, 2), (3, 2), (4, 2), (5, 2);

-- 7. Création de la table rental
CREATE TABLE rental (
    rental_id SERIAL PRIMARY KEY,
    rental_date TIMESTAMP NOT NULL,
    inventory_id INTEGER REFERENCES inventory(inventory_id) ON DELETE CASCADE,
    customer_id INTEGER REFERENCES customer(customer_id) ON DELETE CASCADE,
    return_date TIMESTAMP,
    staff_id INTEGER,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des locations
INSERT INTO rental (rental_date, inventory_id, customer_id, return_date) VALUES
('2005-07-28 10:00:00', 1, 1, '2005-07-30 14:30:00'),
('2005-07-29 11:00:00', 2, 1, '2005-08-01 16:00:00'),
('2005-07-30 09:30:00', 3, 1, '2005-08-02 11:45:00'),
('2005-07-28 15:00:00', 4, 1, '2005-07-31 10:00:00'),
('2005-07-31 14:00:00', 5, 2, NULL), -- Non retournée
('2005-08-01 10:00:00', 6, 2, NULL), -- Non retournée
('2005-07-29 13:00:00', 7, 3, '2005-08-03 09:00:00'),
('2005-07-30 16:00:00', 8, 1, NULL), -- Non retournée
('2005-07-28 11:30:00', 9, 1, '2005-07-29 15:00:00'),
('2005-07-28 14:00:00', 10, 1, '2005-07-30 12:00:00');

-- 8. Création de la table payment
CREATE TABLE payment (
    payment_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customer(customer_id),
    staff_id INTEGER,
    rental_id INTEGER REFERENCES rental(rental_id),
    amount DECIMAL(5,2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des paiements
INSERT INTO payment (customer_id, rental_id, amount, payment_date) VALUES
(1, 1, 4.99, '2005-07-28 10:05:00'),
(1, 2, 5.99, '2005-07-29 11:05:00'),
(1, 3, 3.99, '2005-07-30 09:35:00'),
(1, 4, 4.99, '2005-07-28 15:05:00'),
(2, 5, 6.99, '2005-07-31 14:05:00'),
(2, 6, 5.99, '2005-08-01 10:05:00'),
(3, 7, 4.99, '2005-07-29 13:05:00'),
(1, 8, 5.99, '2005-07-30 16:05:00'),
(1, 9, 4.99, '2005-07-28 11:35:00'),
(1, 10, 6.99, '2005-07-28 14:05:00');

-- =====================================================
-- PARTIE 2: EXERCICE 1
-- =====================================================

-- Exercice 1.1: Obtenir toutes les langues
SELECT * FROM language;

-- Exercice 1.2: Obtenir tous les films avec leurs langues
SELECT f.title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- Exercice 1.3: Obtenir toutes les langues, même sans films
SELECT f.title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

-- Exercice 1.4: Créer une table new_film
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Ajouter des films
INSERT INTO new_film (name) VALUES 
('The Matrix'),
('Inception'),
('The Dark Knight'),
('Pulp Fiction'),
('Forrest Gump');

-- Exercice 1.5: Créer la table customer_review avec ON DELETE CASCADE
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exercice 1.6: Ajouter 2 avis
-- Premier avis
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (
    1,
    (SELECT language_id FROM language WHERE name = 'English'),
    'Excellent film de science-fiction',
    9,
    'The Matrix a révolutionné le cinéma d''action avec ses effets révolutionnaires.',
    CURRENT_TIMESTAMP
);

-- Deuxième avis
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (
    2,
    (SELECT language_id FROM language WHERE name = 'English'),
    'Chef-d''œuvre complexe',
    10,
    'Inception est un film qui vous fait réfléchir longtemps après le générique.',
    CURRENT_TIMESTAMP
);

-- Exercice 1.7: Supprimer un film qui a un avis
-- Cette commande va supprimer le film ET son avis automatiquement à cause de CASCADE
DELETE FROM new_film WHERE id = 1;

-- Vérifier que l'avis a été supprimé
SELECT * FROM customer_review;

-- =====================================================
-- PARTIE 3: EXERCICE 2
-- =====================================================

-- Exercice 2.1: Changer la langue de certains films
UPDATE film 
SET language_id = (SELECT language_id FROM language WHERE name = 'Japanese')
WHERE title LIKE 'T%' OR title LIKE 'S%';

-- Vérifier la modification
SELECT f.title, l.name 
FROM film f
JOIN language l ON f.language_id = l.language_id
WHERE f.title LIKE 'T%' OR f.title LIKE 'S%';

-- Exercice 2.2: Quelles clés étrangères sont définies pour la table customer?
SELECT 
    tc.constraint_name,
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu 
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' 
    AND tc.table_name = 'customer';

-- Explication: Les clés étrangères dans customer sont store_id et address_id
-- Cela affecte l'INSERT car on doit s'assurer que store_id et address_id existent

-- Exercice 2.3: Supprimer la table customer_review
DROP TABLE customer_review;
-- C'est facile car aucune autre table ne référence customer_review

-- Exercice 2.4: Combien de locations sont toujours non retournées?
SELECT COUNT(*) AS locations_non_retournees
FROM rental
WHERE return_date IS NULL;

-- Exercice 2.5: Les 30 films les plus chers qui sont non retournés
SELECT f.title, f.rental_rate, f.replacement_cost, r.rental_date
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC, f.replacement_cost DESC
LIMIT 30;

-- Exercice 2.6: Aider votre ami à trouver les 4 films

-- Film 1: Sumo wrestler avec Penelope Monroe
SELECT DISTINCT f.title, f.description, a.first_name, a.last_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
    AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');

-- Film 2: Documentaire court (moins d'une heure), classé "R"
SELECT title, length, rating, description
FROM film
WHERE rating = 'R' 
    AND length < 60
    AND (description ILIKE '%document%' OR title ILIKE '%document%');

-- Film 3: Matthew Mahan a loué, plus de $4, retourné entre 28 juillet et 1 août 2005
SELECT DISTINCT f.title, p.amount, r.rental_date, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
    AND p.amount > 4.00
    AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- Film 4: Matthew Mahan a regardé, mot "boat" dans titre/description, cher à remplacer
SELECT DISTINCT f.title, f.description, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
    AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;

-- =====================================================

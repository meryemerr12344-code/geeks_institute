const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'restaurant_db',
    password: 'your_password', // Remplacez par votre mot de passe
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Erreur de connexion:', err.stack);
    } else {
        console.log('Connecté à PostgreSQL');
        release();
    }
});

module.exports = pool;
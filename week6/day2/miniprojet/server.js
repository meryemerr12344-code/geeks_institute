const express = require('express');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/menu', menuRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API Restaurant Menu Manager',
        endpoints: {
            'GET /api/menu': 'Voir tous les éléments',
            'GET /api/menu/:name': 'Voir un élément par nom',
            'POST /api/menu': 'Ajouter un élément',
            'PUT /api/menu/:id': 'Modifier un élément',
            'DELETE /api/menu/:id': 'Supprimer un élément'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
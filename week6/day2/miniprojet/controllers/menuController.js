const MenuModel = require('../models/menuModel');

class MenuController {
    static async getMenu(req, res) {
        try {
            const items = await MenuModel.getAllItems();
            res.status(200).json({
                success: true,
                count: items.length,
                data: items
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération',
                error: error.message
            });
        }
    }

    static async getMenuItem(req, res) {
        try {
            const { name } = req.params;
            const item = await MenuModel.getItemByName(name);
            
            if (!item) {
                return res.status(404).json({
                    success: false,
                    message: `L'élément "${name}" n'existe pas`
                });
            }
            
            res.status(200).json({
                success: true,
                data: item
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération',
                error: error.message
            });
        }
    }

    static async addMenuItem(req, res) {
        try {
            const { name, price } = req.body;
            
            if (!name || name.length > 30) {
                return res.status(400).json({
                    success: false,
                    message: 'Le nom est requis et doit faire moins de 30 caractères'
                });
            }
            
            if (typeof price !== 'number' || price < 0 || price > 32767) {
                return res.status(400).json({
                    success: false,
                    message: 'Le prix doit être un nombre entre 0 et 32767'
                });
            }
            
            const existingItem = await MenuModel.getItemByName(name);
            if (existingItem) {
                return res.status(409).json({
                    success: false,
                    message: `L'élément "${name}" existe déjà`
                });
            }
            
            const newItem = await MenuModel.createItem(name, price);
            
            res.status(201).json({
                success: true,
                message: 'Élément ajouté avec succès',
                data: newItem
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de l\'ajout',
                error: error.message
            });
        }
    }

    static async updateMenuItem(req, res) {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            
            if (!name || name.length > 30) {
                return res.status(400).json({
                    success: false,
                    message: 'Le nom est requis et doit faire moins de 30 caractères'
                });
            }
            
            if (typeof price !== 'number' || price < 0 || price > 32767) {
                return res.status(400).json({
                    success: false,
                    message: 'Le prix doit être un nombre entre 0 et 32767'
                });
            }
            
            const existingItem = await MenuModel.getItemById(parseInt(id));
            if (!existingItem) {
                return res.status(404).json({
                    success: false,
                    message: `L'élément avec ID ${id} n'existe pas`
                });
            }
            
            const updatedItem = await MenuModel.updateItem(parseInt(id), name, price);
            
            res.status(200).json({
                success: true,
                message: 'Élément mis à jour avec succès',
                data: updatedItem
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la mise à jour',
                error: error.message
            });
        }
    }

    static async deleteMenuItem(req, res) {
        try {
            const { id } = req.params;
            
            const existingItem = await MenuModel.getItemById(parseInt(id));
            if (!existingItem) {
                return res.status(404).json({
                    success: false,
                    message: `L'élément avec ID ${id} n'existe pas`
                });
            }
            
            const deletedItem = await MenuModel.deleteItem(parseInt(id));
            
            res.status(200).json({
                success: true,
                message: 'Élément supprimé avec succès',
                data: deletedItem
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la suppression',
                error: error.message
            });
        }
    }
}

module.exports = MenuController;
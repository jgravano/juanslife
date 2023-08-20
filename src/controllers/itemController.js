const Item = require('../models/item');

// Create a new item
exports.createItem = async (req, res, next) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);
    } catch (error) {
        next(error);
    }
};

// Get all items
exports.getAllItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        next(error);
    }
};

// Get item by ID
exports.getItemById = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.status(200).send(item);
    } catch (error) {
        next(error);
    }
};

// Update an item by ID
exports.updateItem = async (req, res, next) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedItem) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.status(200).send(updatedItem);
    } catch (error) {
        next(error);
    }
};

// Delete an item by ID
exports.deleteItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndRemove(req.params.id);
        if (!item) {
            return res.status(404).send({ message: 'Item not found' });
        }
        res.status(200).send({ message: 'Item deleted successfully' });
    } catch (error) {
        next(error);
    }
};


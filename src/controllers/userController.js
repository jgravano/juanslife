const User = require('../models/user');

/**
 * Create a new user.
 */
exports.createUser = async (req, res, next) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieve all users.
 */
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
};

/**
 * Retrieve a user by its ID.
 */
exports.getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        
        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            return next(error);
        }        

        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

/**
 * Update a user by its ID.
 */
exports.updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, items } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, items }, {
            new: true, 
            runValidators: true
        });

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        next(error);
    }
};

/**
 * Delete a user by its ID.
 */
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(204).send(); // No content
    } catch (error) {
        next(error);
    }
};

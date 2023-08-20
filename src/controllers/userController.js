const User = require('../models/user');

exports.createUser = async (req, res, next) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        next(error);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }        

        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { name, items } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, items }, {
            new: true, 
            runValidators: true
        });

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(204).send();
    } catch (error) {
        next(error);
    }
};


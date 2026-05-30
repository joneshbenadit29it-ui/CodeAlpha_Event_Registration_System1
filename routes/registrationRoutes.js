const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const User = require('../models/User');

// Submit registration form
router.post('/', async (req, res) => {
    const { name, email, eventId } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ name, email });
            await user.save();
        }

        const newRegistration = new Registration({ user: user._id, event: eventId });
        await newRegistration.save();

        res.status(201).json({ message: "Registered successfully!", registration: newRegistration });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ message: "Already registered for this event." });
        res.status(500).json({ error: err.message });
    }
});

// View registrations for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const registrations = await Registration.find({ user: req.params.userId }).populate('event');
        res.status(200).json(registrations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cancel a registration
router.delete('/:id', async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Registration cancelled." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
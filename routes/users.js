const express = require("express");
const router = express.Router();
const { users } = require("../models");

router.get("/", async (req, res) => {
    const allUsers = await users.findAll();
    res.json(allUsers);
});

router.post("/", async (req, res) => {
    const user = req.body;

    try {
        // Check if the user already exists in the database based on email or phone
        const existingUserByEmail = await users.findOne({ where: { email: user.email } });
        const existingUserByPhone = await users.findOne({ where: { phone: user.phone } });

        if (existingUserByEmail) {
            return res.status(400).json({ error: "User with this email already exists" });
        } else if (existingUserByPhone) {
            return res
                .status(400)
                .json({ error: "User with this phone number already exists" });
        } else {
            await users.create(user);
            res.json(user);
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.patch("/make-user-verified", async (req, res) => {
    const { email } = req.query;

    try {
        // Find the user by email and update their status to verified
        const user = await users.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's status to verified
        await user.update({ status: true });

        res.json({ message: "User status updated to verified" });
    } catch (error) {
        console.error("Error updating user status:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

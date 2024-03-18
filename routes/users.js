const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcryptjs");

//getting all users
router.get("/", async (req, res) => {
    const allUsers = await users.findAll();
    res.json(allUsers);
});

//registering user
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

//making the user verified in the database
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

router.get("/check-email", async (req, res) => {
    const { email } = req.query;

    try {
        const userWithEmail = await users.findOne({ where: { email } });

        if (userWithEmail) {
            res.json({ emailExists: true });
        } else {
            res.json({ emailExists: false });
        }
    } catch (error) {
        console.error("Error checking email and phone existence:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/get-user", async (req, res) => {
    const { email } = req.query;

    try {
        const user = await users.findOne({ where: { email } });
        res.json(user);
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//password checking function
function comparePasswords(enteredPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(
            enteredPassword.trim(),
            hashedPassword.trim(),
            function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        );
    });
}

router.post("/compare-password", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user from the database based on the provided email
        const user = await users.findOne({ where: { email } });

        if (!user) {
            // If user does not exist, return an error response
            return res.status(404).json({ error: "User not found" });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatches = await comparePasswords(password, user.password);
        console.log(passwordMatches, email, password, user.password);

        if (passwordMatches) {
            // If passwords match, return success response
            return res.status(200).json({ success: true });
        } else {
            // If passwords do not match, return error response
            return res.status(401).json({ error: "Incorrect password" });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error fetching user from database:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

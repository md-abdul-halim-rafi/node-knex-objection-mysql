const express = require("express");
const router = express.Router();

const User = require("../models/User");

// GET all users
router.get("/users", (req, res) => {
    User.query().then((users) => {
        res.json(users);
    });
});

// CREATE new user
router.post("/user", async (req, res) => {
    const { body } = req;
    try {
        await User.query().insert({
            username: body.username,
        });
        res.status(200).json(body);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Somethin went wrong");
    }
});

// GET one user by id
router.get("/user/:id", (req, res) => {
    let id = parseInt(req.params.id);
    User.query()
        .findOne({ id })
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch((err) => res.status(500).json({ error: "Something went wrong" }));
});

// UPDATE new user
router.patch("/user/:id", async (req, res) => {
    const { body, params } = req;
    let id = parseInt(params.id);

    try {
        const user = await User.query().findOne({ id });

        if (user) {
            await User.query().update({ username: body.username }).where("id", id);
            res.status(200).json({ message: "User data updated" });
        } else res.status(404).json({ error: "User not found" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Somethin went wrong");
    }
});

// DELETE new user
router.delete("/user/:id", async (req, res) => {
    let id = parseInt(req.params.id);

    try {
        const user = await User.query().findOne({ id });

        if (user) {
            await User.query().where("id", id).delete();
            res.status(200).json({ message: "User has been deleted" });
        } else res.status(404).json({ error: "User not found" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Somethin went wrong");
    }
});

module.exports = {
    router: router,
};

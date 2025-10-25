const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

router.post("/login", (req, res) => {
    let { phone, password } = req.body;
    let token = userController.login(phone, password);

    if (!token) {
        return res.status(401).json({ message: "Invalid credentials" });

    }

    res.json({token});

});
module.exports = router ;
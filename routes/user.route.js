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
router.get("/me", authMiddleware,(req,res)=>{
    const user = userController.getUserById(req.user.id);
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    res.json({
        id: user.id,
        name: user.name,
        phone : user.phone,
        balance : user.balance
    })
})
module.exports = router ;
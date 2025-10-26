const users = require("../db/users.json");
var jwt = require("jsonwebtoken");

const login = (phone, password) =>{
    let user = users.find(
       (el)=> el.phone === phone && el.password === password
    );

    if(!user){
        return null;

    }
    var token = jwt.sign({ id: users.id, username: users.name, phone: user.phone }, process.env.SECRET_KEY, {
        expiresIn: "1h",
    });

    return token
};

const getUserById = (id) =>{
    return users.find(user=>user.id===id)
}

module.exports ={
    login,
    getUserById
}
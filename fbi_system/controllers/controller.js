import { users } from "../data/agentes.js";
import jwt from "jsonwebtoken";
import "dotenv/config";


const secretKey = process.env.JWT_SECRET_KEY;

const home = (req, res) => {
    res.render("partials/login");
}

const login = (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            return res.status(401).render("partials/userNotFound");
        }
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: "2m" });
        res.cookie("token", token, 
            { httpOnly: true,
              maxAge: 40000,
             }).render("partials/dashboard", { email: user.email });
        
    } catch (error) {
        res.status(500).send("Internal server error");
    
    
}}

const restrictedLink = (req, res) => {

    const token = req.cookies.token;

    try {
        if (!token) {
            return res.status(401).render("partials/unauthorized");
        }
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).send("Forbidden");
            }
            res.render("partials/restricted", { email: user.email });
        });
    } catch (error) {
        res.status(500).send("Internal server error");
    }
}


export {
    home,
    login,
    restrictedLink
}
import {Router} from 'express'; 
import { sample_users } from '../data';
import jwt from "jsonwebtoken";

const router = Router();

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateToken(user))
    } else {
        res.status(400).send("Username or Password are not valid")
    }
})

const generateToken = (user:any) => {
    const token = jwt.sign(
        {
            email: user.email,
            isAdmin: user.isAdmin
        },
        "SomeRandomText",
        {
            expiresIn: "30d"
        }
    )
    user.token = token;
    return user;
} 


export default router;
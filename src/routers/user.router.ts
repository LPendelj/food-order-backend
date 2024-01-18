import {Router} from 'express'; 
import { sample_users } from '../data';
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import { User, UserModel } from '../models/user.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) =>{
        const usersCount = await UserModel.countDocuments();
        if(usersCount > 0){
            res.send("Seed already done")
            return
        }

        await UserModel.create(sample_users)
        res.send("Seed is done")
    }
))

router.post("/login", asyncHandler(
    async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({
            email, password
        })
        // stari nacin filtriranja dok nije bilo baze.
        //sample_users.find(user => user.email === email && user.password === password);
    
        if(user){
            res.send(generateToken(user))
        } else {
            res.status(400).send("Username or Password are not valid")
        }
    }
))

const generateToken = (user:User) => {
    const token = jwt.sign(
        {   
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        },
        "SomeRandomText",
        {
            expiresIn: "30d"
        }
    )
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
      };
} 


export default router;
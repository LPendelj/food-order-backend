import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";


const app = express();

//ovime se dodaje mogucnost koriscenja json-a u express aplikaiciji.
app.use(express.json);
app.use(cors(
    {
        credentials: true,
        origin: ["http://localhost:4200"]
    }
))

app.get("/api/foods", (req, res) =>{
    res.send(sample_foods)
})

app.get("/api/foods/tags", (req, res) =>{
    res.send(sample_tags);
 })

 app.get('/api/foods/tag/:tagName', (req, res) =>{
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food => food.tags.includes(tagName))
    res.send(foods);
    })

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;    
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

app.get("/api/foods/search/:searchTerm", (req, res) =>{
   const searchTerm = req.params.searchTerm;
   const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
   res.send(foods);
})


//metoda koja se koristi za logovanje korisnika
app.post("/api/users/login", (req, res) => {
    //uzima se email i pass iz tela zahteva
    const {email, password} = req.body;
    //pretrazuje se korisnik na osnovu email/pass kombinacije
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        //ako korisnik postoji generise se token i salje se odgovor (response) sa podacima korisnika
        res.send(generateToken(user))
    } else {
        res.status(400).send("Username or Password are not valid")
    }
})

//metoda za generisanje JWT tokena. Potrebno je prvo instalirati paket za kreiranje generateJwtToken
const generateToken = (user:any) => {
    //kreira se token pomocu metode Sign. Prvi argument je objekat sa podacima korisnika, drugi je secret (tekst koji sluzi za sifrovanje), a treci je objekat
    //sa duzinom trajanja tokena 
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
    //token se dodeljuje user objektu. I na kraju se vraca novi user objekat.
    user.token = token;
    return user;
} 

const port = 5000;

app.listen(
    port, () => {
        console.log("Welcome from localhost!" + port);
    }
) 

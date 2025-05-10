import {Router} from 'express'; 
import { sample_foods, sample_tags } from '../data';
import asyncHandler from 'express-async-handler'
import { Food, FoodModel } from '../models/food.model';

const router = Router();


//method used to fill the database with data. Have to be async with asuncHandler
router.get("/seed", asyncHandler(
    async (req, res) =>{
        //first we need to check if the database is already seeded (filled)
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount > 0){
            res.send("Seed already done")
            return
        }

        await FoodModel.create(sample_foods)
        res.send("Seed is done")
    }
))

router.get("/", asyncHandler(
   async (req, res) =>{
    const foods = await FoodModel.find();
    res.send(foods)
} 
))

router.get("/search/:searchTerm", asyncHandler(
    async(req, res) =>{
        const searchRegex = new RegExp(req.params.searchTerm, 'i')
        const foods = await FoodModel.find({
            name: {$regex: searchRegex }
        })
        res.send(foods);
    
    // way to filter the array in the data:    
    // const searchTerm = req.params.searchTerm;
    // const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
))

router.get("/tags", asyncHandler(
    async (req, res) =>{
        const tags = await FoodModel.aggregate([
            {
                $unwind: '$tags' //kreira veznu tabelu koja ima po jedno polje za svaki element
            },
            {
                $group: {
                    _id: '$tags',
                    count: {$sum: 1}
                    }
            },
            {
                $project:{
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1});

        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        }

        tags.unshift(all);

        res.send(tags);
     }
))

router.get('/tag/:tagName', asyncHandler(
    async (req, res) =>{
        const foods = await FoodModel.find({
            tags: req.params.tagName
        })
        res.send(foods);
        }
    )
)

router.get("/:foodId", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.foodId)
        res.send(food);
    }
))

router.post("/", asyncHandler(
    async (req, res, next) =>{
           const { name, price, tags, favorite, stars, imageUrl, origins, cookTime } = req.body;
      
          if (!name || !price || !tags ) {
            res.status(400).send("Missing fields!");
          }
      
          const existingFood = await FoodModel.findOne({ name });
      
          if (existingFood) {
            res.status(400).send("Food already exists.");
          }
      
          const newFood: Food = {
            id: '',
            name,
            price,
            tags: [],
            favorite: false,
            stars: 0,
            imageUrl: '',
            origins: [],
            cookTime,
          };
      
          const dbFood = await FoodModel.create(newFood);
          res.send(dbFood);
    }
))


export default router

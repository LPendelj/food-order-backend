

export const sample_foods: any[] =  [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
      // ,
      // {
      //   "id": 7,
      //   "name": "Sushi Roll",
      //   "cookTime": "10-15",
      //   "price": 15,
      //   "favorite": true,
      //   "origins": ["japan"],
      //   "stars": 4.8,
      //   "imageUrl": "/assets/images/foods/food-3.jpg",
      //   "tags": ["Japanese", "Seafood", "Lunch"]
      // },
      // {
      //   "id": 8,
      //   "name": "Spaghetti Bolognese",
      //   "cookTime": "30-40",
      //   "price": 18,
      //   "favorite": false,
      //   "origins": ["italy"],
      //   "stars": 4.6,
      //   "imageUrl": "/assets/images/foods/food-4.jpg",
      //   "tags": ["Pasta", "Italian", "Dinner"]
      // },
      // {
      //   "id": 9,
      //   "name": "Chicken Tikka Masala",
      //   "cookTime": "25-35",
      //   "price": 22,
      //   "favorite": true,
      //   "origins": ["india"],
      //   "stars": 4.9,
      //   "imageUrl": "/assets/images/foods/food-5.jpg",
      //   "tags": ["Indian", "Spicy", "Dinner"]
      // },
      // {
      //   "id": 10,
      //   "name": "Fish and Chips",
      //   "cookTime": "15-25",
      //   "price": 12,
      //   "favorite": false,
      //   "origins": ["england"],
      //   "stars": 4.3,
      //   "imageUrl": "/assets/images/foods/food-6.jpg",
      //   "tags": ["British", "Seafood", "Lunch"]
      // },
      // {
      //   "id": 11,
      //   "name": "Hamburger",
      //   "cookTime": "10-15",
      //   "price": 8,
      //   "favorite": true,
      //   "origins": ["usa"],
      //   "stars": 4.4,
      //   "imageUrl": "/assets/images/foods/food-7.jpg",
      //   "tags": ["FastFood", "American", "Lunch"]
      // },
      // {
      //   "id": 12,
      //   "name": "Pad Thai",
      //   "cookTime": "15-25",
      //   "price": 14,
      //   "favorite": true,
      //   "origins": ["thailand"],
      //   "stars": 4.7,
      //   "imageUrl": "/assets/images/foods/food-8.jpg",
      //   "tags": ["Thai", "Noodles", "Dinner"]
      // },
      // {
      //   "id": 13,
      //   "name": "Falafel",
      //   "cookTime": "10-15",
      //   "price": 10,
      //   "favorite": false,
      //   "origins": ["middle east"],
      //   "stars": 4.2,
      //   "imageUrl": "/assets/images/foods/food-9.jpg",
      //   "tags": ["Vegetarian", "Middle Eastern", "Lunch"]
      // },
      // {
      //   "id": 14,
      //   "name": "Ramen",
      //   "cookTime": "15-20",
      //   "price": 13,
      //   "favorite": true,
      //   "origins": ["japan"],
      //   "stars": 4.6,
      //   "imageUrl": "/assets/images/foods/food-10.jpg",
      //   "tags": ["Japanese", "Noodles", "Dinner"]
      // },
      // {
      //   "id": 15,
      //   "name": "Caesar Salad",
      //   "cookTime": "5-10",
      //   "price": 9,
      //   "favorite": true,
      //   "origins": ["usa"],
      //   "stars": 4.1,
      //   "imageUrl": "/assets/images/foods/food-11.jpg",
      //   "tags": ["Salad", "Healthy", "Lunch"]
      // },
      // {
      //   "id": 16,
      //   "name": "BBQ Ribs",
      //   "cookTime": "60-90",
      //   "price": 25,
      //   "favorite": true,
      //   "origins": ["usa"],
      //   "stars": 4.8,
      //   "imageUrl": "/assets/images/foods/food-12.jpg",
      //   "tags": ["American", "BBQ", "Dinner"]
      // },
      // {
      //   "id": 17,
      //   "name": "Shawarma",
      //   "cookTime": "15-20",
      //   "price": 11,
      //   "favorite": false,
      //   "origins": ["middle east"],
      //   "stars": 4.4,
      //   "imageUrl": "/assets/images/foods/food-13.jpg",
      //   "tags": ["Middle Eastern", "FastFood", "Lunch"]
      // }
    ]

    export const sample_tags: any[] = [
        { name: 'All', count: 14 },
        { name: 'FastFood', count: 4 },
        { name: 'Pizza', count: 2 },
        { name: 'Lunch', count: 3 },
        { name: 'SlowFood', count: 2 },
        { name: 'Hamburger', count: 1 },
        { name: 'Fry', count: 1 },
        { name: 'Soup', count: 1 }
      ]

      export const sample_users: any[] = [
        {
          name: "Joohn Doe",
          email: "pera@peric.com",
          password: "12345",
          address: "Velje Teodorovica",
          isAdmin: true
        },
        {
          name: "Luka Lukic",
          email: "luka@peric.com",
          password: "12345",
          address: "Velje Teodorovica 2",
          isAdmin: false
        }
      ]
const ADD_USER_ID = "ADD USER_ID";
const ADD_CART = "ADD_CART"
const iState = {
    userList: '',
    cartItem: [],
    
    foodDetails: [
        {
             id : 1,
             title : 'Quiche',
             resturantName : 'Nan Xiang Xiao Long Bao',
             price : '450', 
             image : 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
             
             description : 'Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '15 min',
         },
         {
             id : 2,
             title : 'Carbonara',
             resturantName : 'Shanghai Dumpling King',
             price : '350', 
             image : 'http://www.ah-finefood.com/wp-content/uploads/2017/07/tasty-fast-food-recipes-2-735x400.jpg',
             
             description : 'Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '55 min',
         },
         {
             id : 3,
             title : 'Wiener Schnitzel',
             resturantName : 'Shu Jiao Fu Zhou Cuisine',
             price : '550', 
             image : 'http://www.keralapackages.co/wp-content/uploads/2017/02/Sadhya-cuisine-of-kerala-870x480.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '35 min',
         },
         {
             id : 4,
             title : 'Chilly Garlic Wings',
             resturantName : 'Aulis',
             price : '1250', 
             image : 'http://www.gharanarestaurant.com/wp-content/uploads/2014/02/Indian-Dish.jpeg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '35 min',
         },
         {
             id : 5,
             title : 'Cheese Fondue',
             resturantName : 'Bao Fitzrovia',
             price : '50', 
             image : 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1556817214000/photosp/f6131d32-15ee-466c-b822-f66d82211f70/stock-photo-food-seafood-pasta-prawns-pastas-delicious-food-seafood-dishes-seafood-pasta-delicious-meal-f6131d32-15ee-466c-b822-f66d82211f70.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '50 min',
         },
         {
             id : 6,
             title : 'Khao Soi',
             resturantName : 'Seabird, Southwark',
             price : '750', 
             image : 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/10/Idiyappam.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '30 min',
         },
         {
             id : 7,
             title : 'Rosemary Chicken',
             resturantName : 'SUSHISAMBA City',
             price : '200', 
             image : 'https://www.veganricha.com/wp-content/uploads/2019/05/tofu-paneer-lababdar-veganricha-7818-2-302x453.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '10 min',
         },
         {
             id : 8,
             title : 'Paneer Steak',
             resturantName : 'Nobu',
             price : '1050', 
             image : 'https://i.ndtvimg.com/i/2015-12/chicken-curry_625x350_41450863625.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '40 min',
         },
         {
             id : 9,
             title : 'Two item garlic naan',
             resturantName : 'Zuma London',
             price : '250', 
             image : 'https://s3-media2.fl.yelpcdn.com/bphoto/ynj5HBZ4MvYeNzeYBrQcJg/o.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '20 min',
         },
         {
             id : 10,
             title : 'Amritsari Chicken',
             resturantName : 'Sake no Hana',
             price : '450', 
             image : 'https://sulaindianrestaurant.com/wp-content/uploads/2019/06/Picture1.png',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '30 min',
         },
         {
             id : 12,
             title : 'Grilled seabass',
             resturantName : 'Al-Hibabi',
             price : '250', 
             image : 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1541507230000/photosp/2fc699f8-5d5f-43c0-bd92-76a253eb46db/stock-photo-food-healthy-eating-fine-dining-seafood-cuisine-healthy-food-gourmet-dining-foodie-2fc699f8-5d5f-43c0-bd92-76a253eb46db.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '20 min',
         },
         {
             id : 13,
             title : 'Grilled salmon steak',              
             resturantName : 'Kappa',
             price : '250', 
             image : 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1549251379000/photosp/e4eed2b7-6ff6-48cb-b551-ee4e5624acc1/stock-photo-healthy-eating-seafood-salmon-healthy-food-dining-healthy-foods-grilled-fish-restaurant-food-grilled-salmon-e4eed2b7-6ff6-48cb-b551-ee4e5624acc1.jpg',
             
             description : ' Oriental food is Asian style cooking and Continental food is European style cooking.',
             
             paragraph : '20 min',
         },
     ]
 }




const reducer = (state = iState, action) => {
    // console.log(state)
    if(action.type === ADD_USER_ID) {
        console.log(action)
        
        return {
            ...state,
            userList: action.payload,
        };
    }
    if(action.type === ADD_CART) {
        return {
            ...state,                       
            cartItem: [...state.cartItem,action.payload],
            // itemShow: [...state.itemShow,state.itemStatus]
        }
    }
 
    return state;
    
}
export default reducer;
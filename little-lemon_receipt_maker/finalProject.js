// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (dish of dishData) {
        let finalPrice
        if (typeof taxBoolean === 'boolean' && taxBoolean) {
            finalPrice=dish.price*1.2
        } else if(typeof taxBoolean === 'boolean' && !taxBoolean) {
            finalPrice=dish.price
        } else {
            console.log(`You need to pass a boolean to the getPrices call!`)
            return
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean)
    if (typeof guests === 'number' && 0 < guests && guests < 30) {
        let discount = 0
        if (guests < 5) {
            discount = 5
        } else if (5 <= guests) {
            discount = 10
        }
        console.log(`Discount is: $${discount}`)
    } else {
        console.log(`The second argument must be a number between 0 and 30`)
    }
}

// Call getDiscount()
getDiscount(5,5)
getDiscount(true, -5)
getDiscount(false, 0)
getDiscount(false, 2)
getDiscount(false, 5)
getDiscount(false, 10)
getDiscount(false, 30)

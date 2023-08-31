function menuCategoryProducer (dishes) {
    const menuCategorys = [];
    dishes.forEach((dish) => {
        if (! menuCategorys.includes(dish.category))  menuCategorys.push(dish.category);
    });
    return  menuCategorys;
}

export default menuCategoryProducer;
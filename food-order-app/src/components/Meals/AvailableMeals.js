import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("https://react-http-dummy-movies-63286-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
            const responseData = await response.json();
            console.log(responseData)

            // TRANSFORMING ARRAY

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key.key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })
            }
            setMeals(loadedMeals);
        }
        
        fetchMeals();
    }, [])

    const mealsList = meals.map((item, index) => (<MealItem
        key={item.id}
        meal={item}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
    />
    ))


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
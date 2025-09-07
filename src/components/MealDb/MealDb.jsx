import { useEffect, useState } from "react";

export const MealDb = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center m-5">Meal List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              className="rounded-xl mb-4 w-full h-48 object-cover"
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
            <h2 className="text-xl font-bold mb-2">{meal.strMeal}</h2>
            <p className="text-gray-700">
              {meal.strCategory} • {meal.strArea}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

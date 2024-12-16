import FoodItem from "./FoodItem";
export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem food={food} key={food.id} setFoodID={setFoodID} />
      ))}
    </div>
  );
}

import styles from "./FoodItem.module.css";
export default function FoodItem({food, setFoodID }) {
    return (
      <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt="food_image" />
        <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.itemButton} onClick={()=>{setFoodID(food.id)}}>View  Recipe</button>
        </div>
        

      </div>
    );
  }
  
import { useState, useEffect } from "react";
import styles from "./Search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY ="1f729971ccfa42eda714c5194a49ed69";

export default function Search({foodData, setFoodData}) {

    const[query,setQuery]=useState("chicken");
    useEffect(()=>{
     async   function fetchFood() {
       const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
       const data= await res.json();
    //    console.log(data);
    setFoodData(data.results);
        }
        fetchFood();
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    );
}
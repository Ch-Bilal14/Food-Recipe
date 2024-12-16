import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import  './App.css';
function App() {
  const[foodData, setFoodData]= useState([]);
  const[foodId, setFoodID] = useState("641836")
  return (
    <>
    <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
        <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer>
        <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
     
    </>
  );
}

export default App

import React from "react";
import Header from "./components/Header/Header"
import Thing from "./components/Thing/Thing";
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"
import axios from "axios";

function App() {
  const [toDo, setToDo] = React.useState({});

  const updateData = (value) => {
    setToDo(value)
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const toDoResponce = await axios.get("https://632b4caf1aabd8373983f5fc.mockapi.io/cart");
        setToDo(toDoResponce);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header updateData={updateData}/>
      {/* <WorkingPlace list={list}/> */}
      <Thing/>  
    </div>
  );
}

export default App;

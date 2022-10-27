import React from "react";
import Header from "./components/Header/Header"
import Thing from "./components/Thing/Thing";
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"
import axios from "axios";

function App() {
  const [toDo, setToDo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [checkedToDo, setCheckedToDo] = React.useState([]);

  const updateData = (value) => {
    try {
    axios.post("https://6357d29bc26aac906f33694a.mockapi.io/toDo", value);
    setToDo((prev) => [...prev, value]);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  }

  const deleteThing = (id) => {
    axios.delete(`https://6357d29bc26aac906f33694a.mockapi.io/toDo/${id}`);
    setToDo((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [toDoResponce, checkedResponce] =
          await Promise.all([
            axios.get("https://6357d29bc26aac906f33694a.mockapi.io/toDo"),
            axios.get("https://6357d29bc26aac906f33694a.mockapi.io/toDoChecked"),
          ]);
        setIsLoading(false);
        setToDo(toDoResponce.data);
        setIsChecked(checkedResponce);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header toDo={toDo} updateData={updateData}/>
      <WorkingPlace toDo={toDo} isLoading={isLoading} deleteThing={deleteThing} isChecked={isChecked}/>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header"
import Thing from "./components/Thing/Thing";
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"
import axios from "axios";

function App() {
  const [toDo, setToDo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const updateData = (value) => {
    try {
    axios.post("https://6357d29bc26aac906f33694a.mockapi.io/todo", value);
    setToDo((prev) => [...prev, value]);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  }

  const deleteThing = (title) => {
    axios.delete(`https://6357d29bc26aac906f33694a.mockapi.io/todo/${title}`);
    setToDo((prev) =>
      prev.filter((item) => item.title !== title)
    );
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        const toDoResponce = await axios.get("https://6357d29bc26aac906f33694a.mockapi.io/todo");
        setIsLoading(false);
        setToDo(toDoResponce.data);
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
      <WorkingPlace toDo={toDo} isLoading={isLoading} deleteThing={deleteThing}/>
    </div>
  );
}

export default App;

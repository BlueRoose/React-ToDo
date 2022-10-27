import React from "react";
import Header from "./components/Header/Header"
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"
import axios from "axios";
import AppContext from "./context";

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

  const onCheck = (obj) => {
    console.log(obj);
    if (checkedToDo.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://6357d29bc26aac906f33694a.mockapi.io/toDoChecked/${obj.id}`
      );
      setCheckedToDo((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://6357d29bc26aac906f33694a.mockapi.io/toDoChecked", obj);
      setCheckedToDo((prev) => [...prev, obj]);
    }
  };

  const isToDoChecked = (id) => {
    return checkedToDo.some((obj) => Number(obj.id) === Number(id));
  };

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
        setCheckedToDo(checkedResponce.data);
        console.log(toDoResponce.data)
        console.log(checkedResponce.data);  
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{
      toDo,
      updateData,
      isLoading,
      deleteThing,
      checkedToDo,
      onCheck,
      isToDoChecked,
    }}>
    <div className="App">
      <Header/>
      <WorkingPlace updateData={updateData}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;

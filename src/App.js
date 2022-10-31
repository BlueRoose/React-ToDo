import React from "react";
import Header from "./components/Header/Header"
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"
import axios from "axios";
import AppContext from "./context";

function App() {
  const [toDo, setToDo] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [checkedToDo, setCheckedToDo] = React.useState([]);
  const [isUpdated, setIsUpdated] = React.useState(false);

  function updateData(value) {
    try {
      setToDo((prev) => [...prev, value]);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  }

  const deleteThing = (title) => {
    setToDo((prev) =>
      prev.filter((item) => item.title !== title)
    );
  }

  const onCheck = (obj) => {
    try {
      if (checkedToDo.find((item) => Number(item.id) === Number(obj.id))) {
      setCheckedToDo((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      setCheckedToDo((prev) => [...prev, obj]);
    }
    } catch (error) {
      alert("Error!");
      console.log(error);
    }
  };

  const isToDoChecked = (id) => {
    return checkedToDo.some((obj) => Number(obj.id) === Number(id));
  };

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
      <Header updateData={updateData}/>
      <WorkingPlace updateData={updateData}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;

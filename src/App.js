import React from "react";
import Header from "./components/Header/Header"
import Thing from "./components/Thing/Thing";
import WorkingPlace from "./components/WorkingPlace/WorkingPlace";
import "./index.scss"

function App() {
  const [list, setList] = React.useState([]);
  const [toDo, setToDO] = React.useState({});

  return (
    <div className="App">
      <Header/>
      {/* <WorkingPlace list={list}/> */}
      <Thing/>  
    </div>
  );
}

export default App;

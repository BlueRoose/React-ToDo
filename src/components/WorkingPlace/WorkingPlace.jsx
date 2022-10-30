import React from 'react'
import AppContext from '../../context';
import LoadingThing from "../LoadingThing/LoadingThing";
import Thing from "../Thing/Thing";

function WorkingPlace() {

  const {toDo, isLoading, deleteThing, onCheck, isToDoChecked} = React.useContext(AppContext);

  const renderItems = () => {
    return toDo.map((item, index) => (
      <Thing
        key={index}
        id={item.id}
        title={item.title}
        deleteThing={(id) => deleteThing(id)}
        onCheck={(obj) => onCheck(obj)}
        isToDoChecked={isToDoChecked(item && item.id)}
      />
    ));
  };

  return (
    <div className="working">
      {isLoading ? [...Array(4)].map(elem => <LoadingThing/>) : (toDo.length === 0 ? (
        <img className="logo" src="res/logo.svg" alt="logo" />
      ) : renderItems())}
    </div>
  );
}

export default WorkingPlace;

import LoadingThing from "../LoadingThing/LoadingThing";
import Thing from "../Thing/Thing";

function WorkingPlace({ toDo, isLoading, deleteThing, isChecked }) {

  const renderItems = () => {
    return toDo.map((item, index) => (
      <Thing
        key={index}
        id={item.id}
        title={item.title}
        deleteThing={deleteThing}
        isChecked={isChecked}
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

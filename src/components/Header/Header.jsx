import styles from "../../index.scss";

function Header() {
  return (
    <div className="header">
      <header>
        <h1>TO DO | YOUR LISTS</h1>
        <div className="add">
          <img src="res/plus.svg" width={32} height={32} alt="plus" />
          <p>Add new List</p>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;

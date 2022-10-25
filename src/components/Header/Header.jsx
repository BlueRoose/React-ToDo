import React from 'react';
import styles from "../../index.scss";

function Header({ updateData }) {
  const [input, setInput] = React.useState("");

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
    updateData({title: input, checked: false,});
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="header">
      <header>
        <h1>TO DO | YOUR PLANS</h1>
        <div className="adding">
          <input type="text" placeholder="Enter your plan" value={input} onChange={handleChange}/>
          <div className="add" onClick={handleClear}>
            <img src="res/plus.svg" width={32} height={32} alt="plus" />
            <p>Add new plan</p>
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;

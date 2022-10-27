import React from 'react'
import AppContext from '../../context';

function Thing() {

    const {id, title, deleteThing, onCheck, isToDoChecked} = React.useContext(AppContext);

    const obj = {id, title};

    const onClickCheck = () => {
        onCheck(obj);
    }

    return (
        <div className="thing">
            <div className="block">
                <div className="delete">
                    <img src="res/trash.svg" alt="delete" onClick={() => deleteThing(id)}/>
                    <div></div>
                </div>
                <img src={isToDoChecked(id) ? "res/checkbox1.svg" : "res/checkbox0.svg"} onClick={onClickCheck} className="checkbox" alt="checkbox"/>
                <p>{title}</p>
            </div>
            <img className="edit" src="res/arrow.svg" width={32} height={32} alt="arrow"/>
        </div>
    );
}

export default Thing;
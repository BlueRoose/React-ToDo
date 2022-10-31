import React from 'react'
import AppContext from '../../context';

function Thing({id, title, deleteThing, onCheck, isToDoChecked}) {

    const obj = {title};

    const [isChecked, setIsChecked] = React.useState(isToDoChecked);

    const onClickCheck = () => {
        onCheck(obj);
        setIsChecked(!isChecked);
    }

    return (
        <div className="thing">
            <div className="block">
                <div className="delete">
                    <img src="res/trash.svg" alt="delete" onClick={() => deleteThing(title)}/>
                    <div></div>
                </div>
                <img src={isChecked ? "res/checkbox1.svg" : "res/checkbox0.svg"} onClick={onClickCheck} className="checkbox" alt="checkbox"/>
                <p>{title}</p>
            </div>
            <img className="edit" src="res/arrow.svg" width={32} height={32} alt="arrow"/>
        </div>
    );
}

export default Thing;
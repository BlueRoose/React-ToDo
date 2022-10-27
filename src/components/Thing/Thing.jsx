import React from 'react'

function Thing({id, title, checked, deleteThing, isChecked}) {

    const [onCheck, setOnCheck] = React.useState(false);

    const changeCheckBox = () => {
        onCheck = !onCheck;
    }

    return (
        <div className="thing">
            <div className="block">
                <div className="delete">
                    <img src="res/trash.svg" alt="delete" onClick={() => deleteThing(id)}/>
                    <div></div>
                </div>
                {isChecked ? <img onClick={changeCheckBox} className="checkbox" src="res/checkbox0.svg" alt="checkbox"/> : <img onClick={changeCheckBox} className="checkbox" src="res/checkbox1.svg" alt="checkbox"/>}
                <p>{title}</p>
            </div>
            <img className="edit" src="res/arrow.svg" width={32} height={32} alt="arrow"/>
        </div>
    );
}

export default Thing;
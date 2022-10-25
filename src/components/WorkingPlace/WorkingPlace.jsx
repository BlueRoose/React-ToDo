

function WorkingPlace({list}) {
    return (
        <div className="working">
            {list.length === 0 ? (<img className="logo" src="res/logo.svg" alt="logo"/>) : <></>}
        </div>
    );
}

export default WorkingPlace;
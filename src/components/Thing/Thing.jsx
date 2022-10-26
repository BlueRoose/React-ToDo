function Thing({title, checked, deleteThing}) {
    return (
        <div className="thing">
            <div className="block">
                <div className="delete">
                    <img src="res/trash.svg" alt="delete" onClick={() => deleteThing(title)}/>
                    <div></div>
                </div>
                <p>{title}</p>
            </div>
            <img src="res/arrow.svg" width={32} height={32} alt="arrow"/>
        </div>
    );
}

export default Thing;
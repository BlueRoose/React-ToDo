function Thing() {
    return (
        <div className="thing">
            <div className="block">
                <div className="delete">
                    <img src="res/trash.svg" alt="delete"/>
                    <div></div>
                </div>
                <p>New List</p>
            </div>
            <img src="res/arrow.svg" width={32} height={32} alt="arrow"/>
        </div>
    );
}

export default Thing;
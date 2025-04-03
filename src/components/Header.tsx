import { useGlobal } from "../GlobalContext";

function Header() {
    const { changeDisplay } = useGlobal();
    return (
        <div>
            <div id="title" className="title">
                <h1>Josh's To-Do App</h1>
            </div>
            <div className="addItemButton">
                <button onClick={() => changeDisplay(true)}>Add Item</button>
            </div>
        </div>
    );
};

export default Header
import "./Popup.css";

const Popup = ({ children, isActive, setIsPopupActive }) => {

    return (isActive) ? (
        <div className="popup">
                <div className="popup-inner">
                    <button className="close-btn btn btn-danger" onClick={() => setIsPopupActive(false)}>X</button>
                    {children}
                </div>
        </div>
    ) : "";

}

export default Popup;
import { LOGO_URL } from "../utils/urls";

const Header = () => {
    return (
        <div className="header">
            <img id="restaurent-logo" alt="app-logo" src={LOGO_URL} />
            <ul id="nav-items">
                <li>Home</li>
                <li>Categories</li>
                <li>Help</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;
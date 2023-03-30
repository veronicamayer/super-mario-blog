import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <h1>The Best Super Mario Bros Blog</h1>
            <nav>
                <Link to={"/"}>➜ See all posts</Link>
                <Link to={"/admin"}>➜ I'm an admin (I promise...)</Link>
            </nav>
        </header>
    );
};

export default Header;

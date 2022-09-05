import HeaderIcon from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={HeaderIcon} alt="DSMeta" title="Logo do DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig">
                        @devsuperior.ig
                    </a>
                </p>
            </div>
        </header>
    );
}

export default Header;

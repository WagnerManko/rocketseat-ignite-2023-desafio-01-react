import logo from '../assets/logo.png';
import './Header.module.css';

export function Header() {
    return (
        <header>
            <img src={logo} alt="logotipo" />
        </header>
    );
}
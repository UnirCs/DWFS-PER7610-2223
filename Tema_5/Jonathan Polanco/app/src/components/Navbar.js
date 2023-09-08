import './../styles/Navbar.css';
import { Button } from '../components/Button';

export const Navbar = () => {
    return <div className="navbar">
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <Button texto="Inicio"/>
                <Button texto="Mi perfil"/>
                <Button texto="Servicios"/>
                <Button texto="Contactos"/>
            </form>
        </nav>
    </div>
};
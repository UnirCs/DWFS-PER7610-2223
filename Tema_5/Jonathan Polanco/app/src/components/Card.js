import './../styles/Card.css';
import foto from '../img/foto.jpg';
import './../styles/App.css';

export const Card = () => {
    return <div className="card">
         <img src={foto} class="card-foto" alt="foto"></img>
         
            <div className="card-body">
                <h5 className="card-title">Mi perfil</h5>
                <p className="card-text">Me gustan los gatos, viajar, conocer lugares, probar cosas nuevas y estar siempre investigando.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Jonathan Polanco</li>
                <li className="list-group-item">31 años</li>
                <li className="list-group-item">Ingeniero en sistemas</li>
            </ul>
            <div className="card-body">
    <a href="https://www.facebook.com/profile.php?id=100082635242604" className="card-link">
        <img src="https://cdn-icons-png.flaticon.com/256/20/20673.png" class="redes" alt="Facebook" /> 
    </a>
    <a href="https://www.instagram.com/jona._polanco_/" className="card-link">
        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" class="redes" alt="Instagram" /> 
    </a>
</div>
    </div>
};
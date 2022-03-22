
import { Link } from 'react-router-dom';
import '../Style.css';

export default () => {
    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="home"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">


                        <Link  to='/'>
                            <li className="nav-item">
                            Home
                            </li>
                        </Link>

                        <Link to='/Destinoo'>
                            <li className="nav-item">
                               Destinoo
                            </li>
                        </Link>

                        <Link to='/Promocao'>
                            <li className="nav-item">
                               Promocao
                            </li>
                        </Link>


                        <Link to='/Contato'>
                            <li className="nav-item">
                               Contato
                            </li>
                        </Link>


                        <Link to='/Pagamentos'>
                            <li className="nav-item">
                               Pagamento
                            </li>
                        </Link>


                    </ul>

                </div>
            </nav>


        </header>

    );
}
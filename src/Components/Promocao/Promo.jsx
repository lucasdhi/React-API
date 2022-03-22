import disney from '../../assets/img/disney.jpg';
import arraial from '../../assets/img/arraial.jpg';
import beto from '../../assets/img/beto.jpg';
import jeriocoara from '../../assets/img/jeriocoara.jpg';
import maranhão from '../../assets/img/maranhão.jpg';
import rio from '../../assets/img/rio.jpg';
import Cards from '../../Components/Card/Cards';



export default () => {
    return (

        <header>

            <h2>Promoçoes</h2>

            <div className="alert alert-primary" role="alert">
                De uma olhada em nossas promoçoes!
            </div>




            <div>
                <Cards foto={arraial}></Cards>
                <h5 className="card-title">Arraial do cabo </h5>
                <p className="card-text"><b>Venha conferir o caribe brasileiro por $460,00</b></p>
                <a Link="Pagamentos" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />

            <div>
                <Cards foto={disney}></Cards>
                <h5 className="card-title">Disney</h5>
                <p className="card-text"><b>Venha conferir as nossas viagens para a disney por $960,00</b></p>
                <a href="pagamento.html" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />

            <div>
                <Cards foto={beto}></Cards>
                <h5 className="card-title">beto</h5>
                <p className="card-text"><b>Venha conferir o parque do Beto Carreiro $760,00</b></p>
                <a href="pagamento.html" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />

            <div>
                <Cards foto={jeriocoara}></Cards>
                <h5 className="card-title">Jeriocoara </h5>
                <p className="card-text"><b>Venha conferir nossa viagem para Jeriocoara $860,00.</b></p>
                <a href="pagamento.html" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />

            <div>
                <Cards foto={maranhão}></Cards>
                <h5 className="card-title">Maranhão</h5>
                <p className="card-text"><b>Venha conferir nossa viagem para o Maranhão $560,00.</b></p>
                <a href="pagamento.html" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />

            <div>
                <Cards foto={rio}></Cards>
                <h5 className="card-title">rio</h5>
                <p className="card-text"><b>Venha conferir nossa viagem para o Rio de Janeiro $460,00.</b></p>
                <a href="pagamento.html" className="btn btn-primary">Formas de pagamento</a>
            </div>

            <br />



        </header>

    );
}
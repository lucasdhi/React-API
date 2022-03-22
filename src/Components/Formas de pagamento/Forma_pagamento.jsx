import pagamento from '../../assets/img/pagamentos.png';


export default () => {
    return (
        <header>


            <h3> formas de pagamento</h3>

            <div className="alert alert-success" role="alert">
                Confira nossas formas de pagamento!
            </div>

            <div className="text-center">
                <img src={pagamento} className="rounded" alt="formas de pagamentos" />
            </div>



        </header>
    );
}
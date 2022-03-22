
import'../Style.css'
import fundo from '../../assets/img/fundo.jpg'

export default () => {
    return (
        <header>


            <div className="alert alert-primary" role="alert">
                De uma olhada em nossa viagens!
            </div>


            <div className="container">
             

                 <img src={fundo} width="50%" class="img-fluid " />

                <h3> Sobre a nossa agencia </h3>

                <p><b>A agência de viagem Naruto Turismo está presente há 20 anos no mercado. Nosso principal diferencial
                    consiste na prestação de consultoria aos clientes, auxiliando-os a identificar dentre diversas opções de
                    destinos, roteiros, hotéis e passeios, quais os que melhor se adéquam ao seu perfil e às suas necessidades.

                    Entendemos que cada cliente é único e possui necessidades específicas. Por isso, prezamos por um atendimento
                    personalizado de alta qualidade, obtido graças a uma equipe de consultores altamente capacitados e antenados
                    com o que há de melhor no mercado de turismo. Desta forma, nossa agência de viagem é capaz de satisfazer aos
                    mais altos padrões de exigência, seja para indicar um pacote pronto ou para elaborar um roteiro exclusivo
                    sob medida.</b></p>


            </div>

        </header>
    );
}
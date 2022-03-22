
import f1 from '../../assets/img/arraial.jpg';
import f2 from '../../assets/img/beto.jpg';
import f3 from '../../assets/img/cruzeiro.jpg';
import f4 from '../../assets/img/jeriocoara.jpg';
import f5 from '../../assets/img/maranhão.jpg';
import f6 from '../../assets/img/porto.jpg';
import f7 from '../../assets/img/rio.jpg';
import f8 from '../../assets/img/praias.jpg';


export default () => {
    return (
    
    <main>
    
      <h1>destino</h1>
  
      <div className="alert alert-secondary" role="alert">
          Não fique de fora dessa!
        </div>
    
  
        <figure className="figure">
          <img src={f1}arraial className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><strong>Destino para arraial</strong>.</figcaption>
        </figure>
  
        <figure className="figure">
          <img src={f2}className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><strong>Destino para Beto Carreito</strong> .</figcaption>
        </figure>
  
  
        <figure className="figure">
          <img src={f3}className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino diversos cruzeiros</b> </figcaption>
        </figure>
  
  
  
        <figure className="figure">
          <img src={f4} className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino Jeriocoara</b> </figcaption>
        </figure>
  
  
        <figure className="figure">
          <img src={f5}className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino para o Maranhão</b> </figcaption>
        </figure>
  
        
        <figure className="figure">
          <img src={f6 }className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino Porto</b> </figcaption>
        </figure>
  
  
        
        <figure className="figure">
          <img src={f7} className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino para Rio de Janeiro</b> </figcaption>
        </figure>
  
  
        
        <figure className="figure">
          <img src={f8} className="figure-img img-fluid rounded" alt="Imagem de um quadrado genérico com bordas arredondadas, em uma figure."/>
          <figcaption className="figure-caption text-right"><b>Destino para as melhores praias </b> </figcaption>
        </figure>


        </main>

       
    );
  

}
   
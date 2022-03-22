import { useRef } from 'react';
import api from '../../api';

export default () => {
   
const email  = useRef()
const telefone = useRef();

function enviarContato(event){

   event.preventDefault()
   api.post('/Contato',{
     email: email.current.value,
     telefone: telefone.current.value,
   }).then(res => window.location.reload())
   .catch(err => console.log(err))
}

   return (
 


      <header>


         <table width="100%" bgcolor="#F4A460" />



         <h2>contato</h2>

         <div className="box">

            <form action="">
               <fieldset>

                  <legend><b>contato de clientes</b></legend>
                  <br />
                  
                  <div className="inputbox" onSubmit={enviarContato}>
                     <input type="email" name="email" id="email" className="inputuser" required ref={email}/>
                     <label htmlFor="email">email</label>
                  </div>

                  <br />

                  <div className="inputbox">
                     <input type="tel" name="telefone" id="telefone" className="inputuser" required ref={telefone}/>
                     <label htmlFor="telefone">telefone</label>
                  </div>

               
                  <input type="submit" name="submit" id="submit" />



               </fieldset>


            </form>
         </div>


       
      </header>

   );
}
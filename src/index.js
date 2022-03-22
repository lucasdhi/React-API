import React from 'react';
import ReactDOM from 'react-dom';
import Destinoo from './Pages/Destinoo/Destinoo';
import Home from './Pages/Home/Home';
import Contato from './Pages/Contato/Contato';
import Pagamentos from './Pages/Pagamento/Pagamentos';
import Promocao from './Pages/Promocao/Promocao';
import {BrowserRouter, Route,Routes} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
<Routes>
<Route path='/' element= {<Home/>}></Route>
<Route path='/Destinoo' element= {<Destinoo/>}></Route>
<Route path='/Promocao' element= {<Promocao/>}></Route>
<Route path='/Contato' element= {<Contato/>}></Route>
<Route path='/Pagamentos' element= {<Pagamentos/>}></Route>


</Routes>





</BrowserRouter>





</React.StrictMode>,
  document.getElementById('root')
);




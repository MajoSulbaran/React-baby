import logo from './assets/image/logo.svg';
import './assets/css/App.css';


// importar componente

import MiComponente from './components/MiComponente';

function MiPrimerProyecto(nombre, edad){
  var presentacion = (
  
 <div>
      <h2>Hola, soy {nombre} </h2>
      <h3>Tengo {edad} años </h3>
 </div>
 
 );


  return presentacion;
}
function App() {
  var nombre =  "Maria Jose Sulbaran";

  

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hola bievenido a mi primer proyecto.
        </p>
        {MiPrimerProyecto(nombre,31)}                
        <section className="componentes">
        
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>

        
        </section>
    
      </header>

          
    </div>
  );
}

export default App;

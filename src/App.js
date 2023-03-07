// import logo from './logo.svg';  //importar components
import './App.css';  

function App() {
  const titulo = "PRIMER PRÁCTICA"
  const imagen = "https://picsum.photos/200/300"
  const parrafo = "Hola a todos esta es mi primer práctica"
  
  //-----------------------------
  // lógica del componente 
  return (    //return es la que se encarga de renderizar el conten
    <div> 
      <h1>{titulo}</h1>
      <img src = {imagen} alt = "algo"/>
      <p>{parrafo}</p>

    </div>   
  );
}   //title, img , p

export default App;


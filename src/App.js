import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import ContarClicks from "./components/ContarClicks.jsx"
import Input from './components/Input.jsx';
import Mensaje from './components/Mensaje.jsx';
function App() {
  const artistas = [
    {"nombre" : "Mark Dwain", "edad" : "42", "bio" : "no me importa mucho", "profileImage" : "https://picsum.photos/200/300?random=2" },
    {"nombre" : "Ernesto Dwain", "edad" : "22", "bio" : "me importa un pijo", "profileImage" : "https://picsum.photos/200/300?random=3" },
    {"nombre" : "Jose Dwain", "edad" : "21", "bio" : "Pa que importar", "profileImage" : "https://picsum.photos/200/300?random=1" },
    {"nombre" : "Pepe Dwain", "edad" : "19", "bio" : "A quien le importa", "profileImage" : "https://picsum.photos/200/300?random=5" }
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Mensaje />
        <Input />
        <ContarClicks />
      {artistas.map((artista,i) =>{

        return <ProfileCard 
        id={i}
        nombre={artista.nombre}
         edad={artista.edad}
         bio={artista.bio}
       profileImage={artista.profileImage}
       />
      })}
    
      
      </header>
    </div>
  );
}

export default App;

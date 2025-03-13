import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';

function App() {
  const nombre ="Alvaro";
  const edad = 35;
  return (
    <div className="App">
      <header className="App-header">
      <ProfileCard 
      nombre="Mark Dwain"
     edad={42}
      bio="Entusiasta de la tecnología con más de 20 años de experiencia en la industria. Le encanta hacer senderismo."
      profileImage="https://picsum.photos/200/300?random=2"
      />
          <ProfileCard 
      nombre="Blaise Pascal"
     edad={23}
      bio="Matematico brillante"
      profileImage="https://picsum.photos/200/300?random=1"
      />
      </header>
    </div>
  );
}

export default App;

import { useLocation } from 'react-router-dom';
import './styles.css';

function Home() {
  const location = useLocation();
  const username = location.state?.username || 'Usuário';

  return (
    <div className="home-container">
      <h1>Bem-vindo, {username}!</h1>
      <p>Você está conectado na sua conta pessoal.</p>
    </div>
  );
}

export default Home;

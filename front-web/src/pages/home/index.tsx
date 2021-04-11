import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
          <h1 className="text-title">
            Desafio do Capítulo 3, <br />Bootcamp DevSuperior
          </h1>
          <p className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
            Favor observar as instruções passadas no capítulo sobre a <br />elaboração deste projeto.<br/>
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />Mateusz Wierzbicki: antforfigma@gmail.com
          </p>          
          <Link to="/search">
            <Button text="Começar"/>            
          </Link>
      </div>      
    </div>
  );
}

export default Home;
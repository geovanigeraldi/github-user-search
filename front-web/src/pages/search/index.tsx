import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loaders from '../../core/components/Loaders/Loaders';
import { requestWeb } from '../../core/request/request';
import { Perfil } from '../../core/types';
import './styles.css';

const Search = () => {

  const [busca, setBusca] = useState('');
  const [perfil, setPerfil] = useState<Perfil>({
    public_repos: 0, followers: 0, following: 0,
    company: '', blog: '', location: '', created_at: '',
    avatar_url: '', html_url: ''
  });

  const handleRequestPerfil = () => {
    requestWeb({ usuario: busca })
      .then(response => setPerfil(response.data));
  }

  const handleChance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(event.target.value);
  }

  return (
    <div className="search-container">
      <div className="search-content card-base">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input
          className="search-input"
          type="text"
          value={busca}
          onChange={handleChance}
          placeholder="Usuário Github"
        />
        <br />
        <button
          onClick={handleRequestPerfil}
        >
          Encontrar
        </button>
      </div>
      
      <Loaders />

      {perfil && 
      <div className="search-content card-base">
        <div>
          <img src={perfil.avatar_url} alt="" />
          Repositorios Publicos {perfil.public_repos}
          Seguidores {perfil.followers}
          Seguindo {perfil.following}
          Empresa {perfil.company}
          Website/Blog {perfil.blog}
          Localidade {perfil.location}
          Membro desde {perfil.created_at}
        </div>
        <Link to={perfil.html_url} target="_blank">
          Ver Perfil
        </Link>
      </div>
      }
    </div>
  );
}

export default Search;
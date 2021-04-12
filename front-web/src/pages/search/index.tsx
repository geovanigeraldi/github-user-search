import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loaders from '../../core/components/Loaders/Loaders';
import { requestWeb } from '../../core/request/request';
import { Perfil } from '../../core/types';
import './styles.css';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [busca, setBusca] = useState('');
  const [perfil, setPerfil] = useState<Perfil>({
    name: '', public_repos: 0, followers: 0, following: 0,
    company: '', blog: '', location: '', created_at: '',
    avatar_url: '', html_url: ''
  });

  const handleRequestPerfil = () => {
    setIsLoading(true);
    requestWeb({ usuario: busca })
      .then(response => setPerfil(response.data))
      .catch(response => setPerfil({
        name: '', public_repos: 0, followers: 0, following: 0,
        company: '', blog: '', location: '', created_at: '',
        avatar_url: '', html_url: ''
      }))
      .finally(() => { setIsLoading(false); });
  }

  const handleChance = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(event.target.value);
  }

  const handleVerPerfil = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open(event.currentTarget.value);
  }

  return (
    <div className="search-container">
      <div className="card-base">
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
          className="button search-button"
          onClick={handleRequestPerfil}          
        >
          Encontrar
        </button>
      </div>
      
        {isLoading  
          ? <Loaders />
          :
          ((perfil.html_url) && 
          <div className="card-base">
            <div className="search-content-information">
              <div>
                <img
                  className="search-img"
                  src={perfil.avatar_url}
                  alt={perfil.name}
                />
                  <button
                    className="button search-button"
                    onClick={handleVerPerfil}
                    value={perfil.html_url}
                  >
                    Ver Perfil
                </button>
              </div>
              <div>
                <div className="search-content-information">
                  <div className="search-content-top">Repositorios Publicos: {perfil.public_repos}</div>
                  <div className="search-content-top">Seguidores: {perfil.followers}</div>
                  <div className="search-content-top">Seguindo: {perfil.following}</div>
                </div>
                <div className="search-content-information">
                  <div className="search-content-group">
                    <h4 className="search-text-information">Informações</h4>
                    <div className="search-content"><strong>Empresa:</strong> {perfil.company}</div><br/>
                    <div className="search-content"><strong>Website/Blog:</strong> {perfil.blog}</div><br/>
                    <div className="search-content"><strong>Localidade:</strong> {perfil.location}</div><br/>
                    <div className="search-content"><strong>Membro desde:</strong> {perfil.created_at}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>    
          )
          }      
    </div>
  );
}

export default Search;
import './projects.scss'
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import iconGh from '../../global/img/icon-gh.png';

function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch('https://api.github.com/users/mateushen/repos')
        .then(async res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          var data = await res.json()
          setItemsApi(data)
        })
        .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();
  }, [])

  return (
    <>
      <Header />
      <div className="container-projects">
        <h1>PROJETOS</h1>
        {itemsApi.map(item => (
          <div className="projects-gh" key={item.id}>
            <span className="fullname">{item.full_name}</span>
            <h2 className="title-project">{item.name.toUpperCase()}</h2>
            <div className="description-project">
              <span className="date">Data da criação: {Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}</span>
                <div className="url">
                  <a href={item.html_url} className="url">
                    <img src={iconGh} width="20" />Acessar o projeto</a>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects;
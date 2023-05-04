import './projects.scss'
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
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
        <div className="container-title">
          <h1 className="title-page">PROJETOS</h1>
        </div>

        {itemsApi.map(item => (
          <div className="projects-gh" key={item.id}>
            <span className="fullname">{item.full_name}</span>
            <h2 className="title-project">{item.name.toUpperCase()}</h2>
            <div className="description-project">
              <div className="url">
                <div className="topic"></div>
                <span className="language">{item.language}</span>
              </div>
              <div className="url">
                <a href={item.html_url} className="url" target="_blank">
                  <img src={iconGh} width="20" />Acessar repositório</a>
              </div>
            </div>
            <span className="date">Data da criação: {Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}</span>
          </div>
        ))}

      </div>
      <Footer />
    </>
  )
}

export default Projects;
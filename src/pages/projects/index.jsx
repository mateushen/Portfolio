import './projects.scss'
import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
      <div className="container">
        {itemsApi.map(item => (
          <div className="projects" key={item.id}>
            <span className="fullname">{item.full_name}</span>
            <h2>{item.name.toUpperCase()}</h2>
            <a href={item.url}>URL: {item.html_url}</a>
            <span className="date">Data da criação: {Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </span>
            <a href="https://github.com/mateushen" target="_blank" rel="noreferrer">

            </a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Projects;
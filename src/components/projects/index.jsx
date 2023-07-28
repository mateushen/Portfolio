import { useEffect, useState } from 'react';
import iconGh from '../../global/img/icon-gh2.png';
import '../../global/style/style.scss';

export default function Projects() {
    const [itemsApi, setItemsApi] = useState([]);

    useEffect(() => {
        let abortController = new AbortController();

        function getGitHubAPI() {
            fetch('https://api.github.com/users/mateushen/repos')
                .then(async res => {
                    if (!res.ok) {
                        throw new Error(res.status)
                    }
                    var data = await res.json();

                    if (data) {
                        const index = data.findIndex(item => item.id === 636388134);
                        if (index !== -1) {
                            const newItems = [...data];
                            newItems.splice(index, 1);
                            setItemsApi(newItems);
                        }
                    }
                })
                .catch(e => console.log(e))
        }

        getGitHubAPI();

        return () => abortController.abort();
    }, [])

    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">PROJETOS</h2>
            <div className="container-main-projects">

                <div className="container-title">
                    <h1 className="title-page-projects">PROJETOS</h1>
                </div>

                <div className="grid-projects">

                    {itemsApi.map(item => (
                        <div className="container-projects" key={item.id}>
                            <div className="box-projects">

                                <h2 className="title-project">{item.name.toUpperCase()}</h2>

                                <div className="info-project">
                                    <div className="topic"></div><span className="language" style={{ marginLeft: "0.5rem" }}>{item.language}</span>
                                </div>

                                <div className="info-project" style={{ marginTop: "2rem" }}>
                                    <a href={item.html_url} className="view-project" target="_blank">
                                        <img src={iconGh} width="20" style={{ marginLeft: "0.5rem" }} />ACESSAR
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
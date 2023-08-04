import '../../global/style/style.scss';
import { useEffect, useState } from 'react';
import { Folder } from '@phosphor-icons/react';

export default function allProjects() {
    const [projects, setProjects] = useState([]);

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
                            setProjects(newItems);
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
            {projects.map(item => (
                <div className="project-container" key={item.id}>
                    <div className="component-left"><Folder className="folder" size={25} /><div className="vertical-line"></div></div>
                    <div className="project-description">
                        <h3 className="project-title">{item.name}</h3>
                        <p className="project-language">{item.language}</p>
                        <a className="project-url" href={item.html_url}>Ver repositório ➜ </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
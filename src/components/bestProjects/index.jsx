import '../../global/style/style.scss';
import { Folder } from '@phosphor-icons/react';
import { Projects } from './projects';

export default function bestProjects() {
    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">PRINCIPAIS PROJETOS</h2>
            {Projects.map(item => (
                <div className="project-container" key={item.id}>
                    <div className="component-left"><Folder className="folder" size={25} /><div className="vertical-line"></div></div>
                    <div className="project-description">
                        <h3 className="project-title">{item.name}</h3>
                        <div><p className="project-language">{item.language}</p></div>
                        <a className="project-url" href={item.url} target="_blank">Ver repositório ➜ </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
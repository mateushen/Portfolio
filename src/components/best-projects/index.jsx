import '../../global/style/style.scss';
import { Folder } from '@phosphor-icons/react';
import { projects } from '../../utils/projects';

export default function bestProjects() {

    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">PRINCIPAIS PROJETOS</h2>
            {projects.map(item => (
                <div className="project-container" key={item.id}>
                    <div className="component-left"><Folder className="folder" size={25} /><div className="vertical-line"></div></div>
                    <div className="project-description">
                        <h3 className="project-title">{item.name}</h3>
                        <p className="project-language">{item.language}</p>
                        <p className='description'>{item.description}</p>
                        <a className="project-url" href={item.url} target="_blank">Ver repositório ➜ </a>
                    </div>
                </div>
            ))}
            <a href='https://github.com/mateushen/' target='_blank' className="button-projects">Ver todos</a>
        </div>
    )
}
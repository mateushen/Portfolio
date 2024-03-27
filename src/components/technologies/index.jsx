import '../../global/style/style.scss';
import iconJs from '../../assets/img/js.png';
import iconTs from '../../assets/img/ts.png'
import iconHtml from '../../assets/img/html.png';
import iconCss from '../../assets/img/css.png';
import iconNode from '../../assets/img/nodejs.png';
import iconReact from '../../assets/img/reactjs.png';
import iconMysql from '../../assets/img/mysql.png';
import iconGit from '../../assets/img/git.png';
import iconFigma from '../../assets/img/figma.png';

export default function Technologies() {
    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">TECNOLOGIAS</h2>
            <div className="technologies-container">
                <img src={iconHtml} width="50" title="HTML" />
                <img src={iconCss} width="50" title="CSS" />
                <img src={iconJs} width="50" title="JavaScript" />
                <img src={iconTs} width="50" title="TypeScript" />
                <img src={iconNode} width="50" title="NodeJs" />
                <img src={iconReact} width="50" title="ReactJs" />
                <img src={iconMysql} width="50" title="MySQL" />
                <img src={iconGit} width="50" title="Git" />
                <img src={iconFigma} width="50" title="Figma" />
            </div>
        </div>
    )
}
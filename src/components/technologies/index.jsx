import '../../global/style/style.scss';
import iconPhp from '../../global/img/php.png';
import iconJs from '../../global/img/js.png';
import iconC from '../../global/img/c.png';
import iconCPP from '../../global/img/cpp.png';
import iconHtml from '../../global/img/html.png';
import iconCss from '../../global/img/css.png';
import iconNode from '../../global/img/nodejs.png';
import iconReact from '../../global/img/reactjs.png';
import iconMysql from '../../global/img/mysql.png';
import iconGit from '../../global/img/git.png';
import iconFigma from '../../global/img/figma.png';

export default function Technologies() {
    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">TECNOLOGIAS</h2>
            <div className="technologies-container">
                <img src={iconC} width="50" title="C"/>
                <img src={iconCPP} width="50" title="C++" />
                <img src={iconHtml} width="50" title="HTML" />
                <img src={iconCss} width="50" title="CSS" />
                <img src={iconPhp} width="50" title="PHP"/>
                <img src={iconJs} width="50" title="JavaScript"/>
                <img src={iconNode} width="50" title="NodeJs"/>
                <img src={iconReact} width="50" title="ReactJs"/>
                <img src={iconMysql} width="50" title="MySQL"/>
                <img src={iconGit} width="50" title="Git" />
                <img src={iconFigma} width="50" title="Figma"/>
            </div>
        </div>
    )
}
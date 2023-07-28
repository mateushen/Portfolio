import '../../global/style/style.scss';
import iconPhp from '../../global/img/php.png';
import iconJs from '../../global/img/js.png';
import iconC from '../../global/img/c.png';
import iconCPP from '../../global/img/cpp.png';
import iconCSharp from '../../global/img/csharp.png';
import iconHtml from '../../global/img/html.png';
import iconCss from '../../global/img/css.png';
import iconNode from '../../global/img/nodejs.png';

export default function Skills() {
    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">HABILIDADES</h2>
            <div className="skills-container">
                <img src={iconC} width="50" />
                <img src={iconCPP} width="50" />
                <img src={iconCSharp} width="50" />
                <img src={iconHtml} width="50" />
                <img src={iconCss} width="50" />
                <img src={iconPhp} width="50" />
                <img src={iconJs} width="50" />
                <img src={iconNode} width="50" />
            </div>
        </div>
    )
}
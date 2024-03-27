import '../../global/style/style.scss';
import { experience } from '../../utils/experience';

export default function Experience() {
    return (
        <div className="component-container">
            <hr />
            <h2 className="component-title">EXPERIÊNCIA</h2>
            {experience ? (
                experience.map((item, index) => (
                    <section key={index} className="component-description">
                        <h3>{item.cargo}</h3>
                        <span className="description-local">{item.empresa}</span>
                        <span className="description-year">{item.periodo}</span>
                    </section>
                ))
            ) : ('')}
        </div>
    );
}
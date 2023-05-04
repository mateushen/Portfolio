import './card.scss';
import iconFace from '../../global/img/icon-face.png';
import iconInsta from '../../global/img/icon-insta.png';
import iconLinkedin from '../../global/img/icon-linkedin.png';
import iconGh from '../../global/img/icon-gh.png';

export default function Card({icon}) {
    return (
        <div className="card">
            {icon === 'facebook' && (
                <a href="https://www.facebook.com/mateeus.heenrique.7" target="_blank"><img src={iconFace} alt="icon" width="30" /></a>
            )}
            {icon === 'instagram' && (
                <a href="https://www.instagram.com/mateus.hen10/" target="_blank"><img src={iconInsta} alt="icon" width="30" /></a>
            )}
            {icon === 'github' && (
                <a href="https://github.com/mateushen/" target="_blank"><img src={iconGh} alt="icon" width="30" /></a>
            )}
            {icon === 'linkedin' && (
                <a href="https://www.linkedin.com/in/mateushen001/" target="_blank"><img src={iconLinkedin} alt="icon" width="30" /></a>
            )}
        </div>
    )
}
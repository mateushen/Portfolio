import './social.scss';
import { FacebookLogo, InstagramLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Social({ icon }) {
    return (
        <div className="social-component">
            {icon === 'facebook' && (
                <a href="https://www.facebook.com/mateeus.heenrique.7" target="_blank"><FacebookLogo size={32} weight="bold" className="social-icon" /></a>
            )}
            {icon === 'instagram' && (
                <a href="https://www.instagram.com/mateus.hen10/" target="_blank"><InstagramLogo size={32} weight="bold" className="social-icon" /></a>
            )}
            {icon === 'github' && (
                <a href="https://github.com/mateushen/" target="_blank"><GithubLogo size={32} weight="bold" className="social-icon" /></a>
            )}
            {icon === 'linkedin' && (
                <a href="https://www.linkedin.com/in/mateushen001/" target="_blank"><LinkedinLogo size={32} weight="bold" className="social-icon" /></a>
            )}
        </div>
    )
}
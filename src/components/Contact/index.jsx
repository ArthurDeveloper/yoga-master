import FadeInAnimation from '../FadeInAnimation';
import { SocialIcon } from 'react-social-icons';
import './index.css';

export default function Contact() {
    return (
        <FadeInAnimation duration={1000} direction="up" offset={40}>
            <section>
                <h2 className="main-text">
                    <span className="strong-font">
                        Contact us
                    </span>
                </h2>

                {/* TODO: replace urls with downloaded images */}
                <div className="contact-icons-wrapper">
                    <div className="contact-icons">
                        <div>
                            <SocialIcon url="https://web.whatsapp.com/" />
                        </div>
                        <div>
                            <SocialIcon url="https://twitter.com" />
                        </div>
                        <div>
                            <SocialIcon url="https://youtube.com/" />
                        </div>
                        <div>
                            <SocialIcon url="https://telegram.org/" />
                        </div>
                    </div>
                </div>
            </section>
        </FadeInAnimation>
    )
}
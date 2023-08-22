import FadeInAnimation from '../FadeInAnimation';
import './index.css';

export default function AboutUs() {
    return (
        <FadeInAnimation duration={1000} direction="up" offset={40}>
            <div className="sections-wrapper" id="about-us">
                <section className="section">
                    <h3 className="section-title">Who we <span className="strong-font">are</span></h3>
                    <p className="section-text">
                        We're a group of people who love yoga and share their knowledge.
                        We want to help you to get started with yoga and to get better in it
                        while you improve both your physical and mental health.
                    </p>
                </section>

                <section className="section">
                    <h3 className="section-title">What we <span className="strong-font">do</span></h3>
                    <p className="section-text">
                        We share all our knowledge and experience in the field of yoga through
                        online classes.
                        We think yoga is a practice that should be practiced with 
                        passion and dedication, since it can improve your health and
                        be an awesome hobby.
                    </p>
                </section>
            </div>
        </FadeInAnimation>
    );
}
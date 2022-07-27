import './index.css';

export default function AboutUs() {
    return (
        <section className="sections-wrapper">
            <section>
                <h1 className="section-title">Who we <span className="strong-font">are</span></h1>
                <p className="section-text">
                    We're a group of people who love yoga and share their knowledge.
                    We want to help you to get started with yoga and to get better in it
                    while you improve both your physical and mental health.
                </p>
            </section>

            <section>
                <h1 className="section-title">What we <span className="strong-font">do</span></h1>
                <p className="section-text">
                    We share all our knowledge and experience in the field of yoga through
                    online classes.
                    We think yoga is a practice that should be practiced with 
                    passion and dedication, since it can improve your health and
                    be an awesome hobby.
                </p>
            </section>
        </section>
    );
}
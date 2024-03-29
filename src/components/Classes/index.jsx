import FadeInAnimation from '../FadeInAnimation';
import './index.css';

function ClassCard({ title, description, image, alt }) {
	return (
		<div className="class-card">
			<img
				src={image}
				alt={alt}
				className="class-card-image"
			/>
            
			<h2>{title}</h2>
			<p>
				{description}
			</p>
		</div>
	);
}

export default function Classes() {
    return (
        <FadeInAnimation duration={1500} direction="left" offset={10}>
            <section id="classes">
                <h2 className="main-text">
                    Watch the <span className="strong-font">BEST</span> classes for you
                </h2>

                <div className="classes">
					<ClassCard
						title="Basic poses"
						description="Simple poses that will help you get started"
						image="basic.jpeg" 
						alt="Yoga poses"
					/>
					
					<ClassCard
						title="Poses for your posture"
						description="Improve your posture with this class"
						image="posture.jpeg"
						alt="Poses for posture"
					/>

					<ClassCard
						title="For children"
						description="Make your children learn yoga as well!"
						image="children.jpeg"
						alt="For children"
					/>

					<ClassCard
						title="At the morning"
						description="Yoga should be done in the morning too!"
						image="morning.jpeg"
						alt="Yoga in the morning"
					/>

					<ClassCard 
						title="Duos"
						description="Yoga is much more fun when you do it together!"
						image="duos.jpeg"
						alt="Duos"
					/>

					<ClassCard 
						title="For pregnants"
						description="Yoga improves your baby's health too!"
						image="pregnants.jpeg"
						alt="For pregnants"

					/>
                </div>

				<div className="see-more-classes-btn-container">
					<a className="see-more-classes-btn">See More</a>
				</div>
			</section>
        </FadeInAnimation>
    )
}
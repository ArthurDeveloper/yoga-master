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
            <section>
                <h2 className="main-text">
                    Watch the <span className="strong-font">BEST</span> classes for you
                </h2>
                <div className="classes">
                    {/* TODO: Download the images and update sources */ }
					<ClassCard
						title="Basic poses"
						description="Simple poses that will help you get started"
						image="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
						alt="Basic poses"
					/>
					
					<ClassCard
						title="Poses for your posture"
						description="Improve your posture with this class"
						image="https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="Poses for posture"
					/>

					<ClassCard
						title="For children"
						description="Make your children learn yoga as well!"
						image="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="For children"
					/>

					<ClassCard
						title="At the morning"
						description="Yoga should be done at the morning too!"
						image="https://images.pexels.com/photos/3756520/pexels-photo-3756520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Yoga should be done at the morning too!"
					/>

					<ClassCard 
						title="Duos"
						description="Yoga is way more fun when you do it in pairs!"
						image="https://images.pexels.com/photos/4327162/pexels-photo-4327162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Duos"
					/>

					<ClassCard 
						title="For pregnants"
						description="Yoga can improve your baby's health too!"
						image="https://images.pexels.com/photos/7055668/pexels-photo-7055668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="For pregnants"

					/>

                    <a className="see-more-classes-btn">See More</a>
                </div>
            </section>
        </FadeInAnimation>
    )
}
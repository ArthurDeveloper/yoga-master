import './index.css';

export default function Classes() {
    return (
        <section>
            <h1 className="main-text">
                Watch the <span className="strong-font">BEST</span> classes for you
            </h1>

            <div className="classes">
                {/* TODO: Download the images and update sources */ }
                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>Basic poses</h2>
                    <p>
                        Simple poses that will help you to get started.
                    </p>
                </div>

                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>Poses for your posture</h2>
                    <p>
                        Improve your posture with this class.
                    </p>
                </div>

                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>For children</h2>
                    <p>
                        Make your children learn yoga as well!
                    </p>
                </div>

                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/3756520/pexels-photo-3756520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>At the morning</h2>
                    <p>
                        Yoga should be done at the morning too!
                    </p>
                </div>

                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/4327162/pexels-photo-4327162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>Duos</h2>
                    <p>
                        Yoga is way more fun when you do it in pairs!
                    </p>
                </div>

                <div className="class-card">
                    <img 
                        src="https://images.pexels.com/photos/7055668/pexels-photo-7055668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Basic poses"
                        className="class-card-image"
                    />
                    
                    <h2>For pregnants</h2>
                    <p>
                        Yoga can improve your baby's health too!
                    </p>
                </div>

                <button className="see-more-classes-btn">See More</button>
            </div>
        </section>
    )
}
import { IoMdPin } from 'react-icons/io';
import './index.css';

export default function Footer() {
    return (
        <footer>
            <div>Any doubts? <span className="strong-font">+1 567-239-4123</span></div>

            <address>
                <IoMdPin />
                47249 Trantow Ville, Apt. 894, 74354-7201, Tommieland, Tennessee, United States
            </address>

			<div className="credits">
				<small>
					Yoga poses image by <a href="https://www.freepik.com/free-vector/international-yoga-day-hand-drawn-flat-yoga-poses-collection_25914493.htm#query=yoga%20woman&position=15&from_view=search&track=ais">Freepik</a>
				</small>
			</div>
		</footer>
    )
}
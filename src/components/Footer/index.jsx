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
        </footer>
    )
}
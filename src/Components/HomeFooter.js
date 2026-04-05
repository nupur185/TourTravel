import { Link } from "react-router"

export default function HomeFooter() {
    return (
        <div className="bg-green-950 text-white pt-14 px-24 pb-6 mt-15">
            <div className="flex items-center gap-3 mb-12 footerlogo">
                <img src="https://tse3.mm.bing.net/th/id/OIP.cv5rdYoatS2bUAdFALOhgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="w-15 h-15 object-contain"></img>
                <h1 className="font-bold text-3xl">TourTravel</h1>
            </div>

            {/* main footer */}

            <div className="flex justify-evenly flex-wrap">
                <div className="homefootercontact">    
                    <h2 className="font-semibold text-xl">CONTACT US</h2>
                    <a href="tel:+3545195544" className="clickable">📞 +354 519 5544</a>
                    <a href="mailto:info@tourtravel.is" className="clickable">✉ Info@TourTravel.is</a>
                    <a href="https://www.google.com/maps?q=Patna,Bihar" target="_blank" className="clickable">📍 Patna, Bihar, India</a>
                    <h2 className="font-bold pt-6">FOLLOW US ON</h2>
                    <div className="flex gap-4 text-2xl"><img src="https://troll.is/assets/svg/facebook-logo.svg"/><img src="https://troll.is/assets/svg/instagram-logo.svg"/><img src="https://troll.is/assets/svg/tripadvisor-logo.svg"/></div>
                </div>
                <div className="homefootercontact">
                    <h2 className="font-semibold text-xl">EXPLORE</h2>
                    <Link to="/allcards"><p className="clickable">Tours</p></Link>
                    <Link to="/faq" className="clickable">FAQ</Link>
                    <p>Podcast</p>
                    <Link to="/about" className="clickable">About Us</Link>
                    <Link to="/tandc" className="clickable">Terms and Conditions</Link>
                </div>
            </div>
            <div className="border-t border-green-800 mt-12 pt-4 text-sm text-gray-300">© 2026 TourTravel Expeditions. All Rights Reserved.</div>
        </div>
    )
}
export default function HomeFooter() {
    return (
        <div className="bg-green-950 text-white pt-14 px-24 pb-6 mt-15">
            <div className="flex items-center gap-3 mb-12">
                <img src="https://tse3.mm.bing.net/th/id/OIP.cv5rdYoatS2bUAdFALOhgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo" className="w-15 h-15 object-contain"></img>
                <h1 className="font-bold text-3xl">TravelTour</h1>
            </div>

            {/* main footer */}

            <div className="flex justify-evenly flex-wrap">
                <div className="homefootercontact">    
                    <h2 className="font-semibold text-xl">CONTACT US</h2>
                    <p>📞 +354 519 5544</p>
                    <p>✉ Info@TravelTour.is</p>
                    <p>📍 Patna, Bihar, India</p>
                    <h2 className="font-bold pt-6">FOLLOW US ON</h2>
                    <div className="flex gap-4 text-2xl"><img src="https://troll.is/assets/svg/facebook-logo.svg"/><img src="https://troll.is/assets/svg/instagram-logo.svg"/><img src="https://troll.is/assets/svg/tripadvisor-logo.svg"/></div>
                </div>
                <div className="homefootercontact">
                    <h2 className="font-semibold text-xl">EXPLORE</h2>
                    <p>Tours</p>
                    <p>FAQ</p>
                    <p>Podcast</p>
                    <p>About Us</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
            <div className="border-t border-green-800 mt-12 pt-4 text-sm text-gray-300">© 2025 Tröll Expeditions. All Rights Reserved.</div>
        </div>
    )
}
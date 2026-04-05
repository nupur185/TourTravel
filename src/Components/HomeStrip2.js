import './HomeStrip2.css'
export default function HomeStrip2() {
    return (
        <div className="flex rounded-3xl bg-[#dcfce7] py-10 h-98 my-15 main">
            <div className="h-82 w-[40%] mx-auto strip">
                <h2 className="font-bold text-2xl py-8">Iceland + Adventures² = TourTravel</h2>
                <p>When you come to Iceland, you want to get it right. These are once-in-a-lifetime memories—and they deserve a tour operator you can count on. With TourTravel, you're choosing one of Iceland’s leading adventure companies, with expert guides, small group tours, and bases all across the country—including departures from Reykjavík.
                    <span className="pt-4">We offer 24-hour customer support and thousands of five-star reviews to back it up. So don’t just take our word for it—see what real travelers have to say.</span></p>
            </div>
            <div>
                <img src="https://images.troll.is/v1/troll/aDRXCidWJ-7kSirS_Group2609.png?auto=format,compress" className="w-[40%] float-right mr-[25%] image"></img>
                <img src="https://images.troll.is/v1/troll/aDRW6SdWJ-7kSirM_Group279.png?auto=format,compress" className="w-[40%] float-right clear-right mr-[25%] image"></img>
            </div>
        </div>
    )
}
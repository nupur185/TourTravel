import Homecontent from "./Homecontent"
import HomeHeader from "./HomeHeader"

export default function Home () {
    return (
        <div className="overflow-x-hidden">
        <HomeHeader/>
        <Homecontent/>
        </div>
    )
}
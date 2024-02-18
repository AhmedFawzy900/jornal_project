import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import LeftSide from "../components/LeftSide";
import MiddlePart from "../components/MiddlePart";
import RightSide from "../components/RightSide";

export default function Home(){
    return(
            <div className=' row'>
                <LeftSide />
                <MiddlePart />
                <RightSide />
            </div>
    );
}
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import HeaderImg from "../components/HeaderImg";
import LeftSide from "../components/LeftSide";
import MiddlePart from "../components/MiddlePart";
import RightSide from "../components/RightSide";

export default function Home(){
    return(
        <div className='container'>
            <HeaderImg />
            <div className='container row'>
                <LeftSide />
                <MiddlePart />
                <RightSide />
            </div>
            <GoToTop/>
            <Footer />
      </div>
    );
}
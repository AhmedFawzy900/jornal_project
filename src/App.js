import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftSide from './components/LeftSide';
import MiddlePart from './components/MiddlePart';
import Footer from './components/Footer';
import RightSide from './components/RightSide';
import GoToTop from './components/GoToTop';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AboutJor from './pages/AboutJor';
import EditorialJor from './pages/EditorialJor';
import Header from './components/Header';
import Aims from './pages/Aims';
import Ethics from './pages/Ethics';
import Abstracting from './pages/Abstracting';
import RelatedLinks from './pages/RelatedLinks';
import FAQ from './pages/FAQ';
import PeerReview from './pages/PeerReview';
import News from './pages/News';
import GuidedForAuthor from './pages/GuidedForAuthor';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import CurrentIssue from './pages/CurrentIssue';
import ByIssue from './pages/ByIssue';
import Cta from './pages/Cta';
import AuthorTemplate from './pages/AuthorTemplate';
import Abstract from './components/Abstract';
import AbstractPage from './pages/AbstractPage';
import SubmitReasearch from './pages/SubmitResearch';
import { history } from './routerConfig';
import ResearchesStatus from './pages/ResearchesStatus';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Routes>
          <Route path={'/home'} element={<Home/>} />
          <Route path={'/'} element={<Home/>} />
          <Route path={'/jornalInfo/about'} element={<AboutJor/>} />
          <Route path={'/jornalInfo/aims'} element={<Aims/>} />
          <Route path={'/jornalInfo/editorial'} element={<EditorialJor/>} />
          <Route path={'/jornalInfo/ethics'} element={<Ethics/>} />
          <Route path={'/jornalInfo/abstracting'} element={<Abstracting/>} />
          <Route path={'/jornalInfo/relatedLinks'} element={<RelatedLinks/>} />
          <Route path={'/jornalInfo/FAQ'} element={<FAQ/>} />
          <Route path={'/jornalInfo/peerReview'} element={<PeerReview/>} />
          <Route path={'/jornalInfo/news'} element={<News/>} />
          <Route path={'/gidedForAuthor'} element={<GuidedForAuthor/>} />
          <Route path={'/contactUs'} element={<ContactUs/>} />
          <Route path={'/login'} element={<Login/>} />
          <Route path={'/register'} element={<Register/>} />
          <Route path={'/browse/currentIssue'} element={<CurrentIssue/>} />
          <Route path={'/browse/ByIssue'} element={<ByIssue/>} />
          <Route path={'/cta'} element={<Cta/>} />
          <Route path={'/authorTemplate'} element={<AuthorTemplate/>} />
          <Route path={'/abstract/:id'} element={<AbstractPage/>} />
          <Route path={'/submitManuscript'} element={<SubmitReasearch/>} />
          <Route path={'/research'} element={<ResearchesStatus/>} />
        </Routes>

        <GoToTop/>
        <Footer />
      </div>

    </div>
  );
}

export default App;

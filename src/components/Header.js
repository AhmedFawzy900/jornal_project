import headImg from '../images/head_en.jpg';
import '../App.css';
import { Link } from 'react-router-dom';
export default function Header(){
    return(
       <div className="container">
            <img className='headImg w-100' src={headImg} alt="image" />
            <nav id='nav' className="navbar navbar-expand-lg bg-body-tertiary">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div className="nav-content">
                    <div className="nav-content collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav list">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={'/home'}>Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            jornal info
                        </a>
                        <ul className="dropdown-menu dropmen">
                            <li><Link class="dropdown-item" to={'/jornalInfo/about'}>About jornal</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/aims'}>visions</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/editorial'}>Editorial Board</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/ethics'}>publication ethics</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/abstracting'}>indexing and abstracting</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/relatedLinks'}>related links</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/FAQ'}>FAQ</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/peerReview'}>peer review process</Link></li>
                            <li><Link class="dropdown-item" to={'/jornalInfo/news'}>news</Link></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={'/authorTemplate'}>Author template</Link>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link" to={'/cta'}>CTA</Link>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link" to={'/gidedForAuthor'}>Guide for Author</Link>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">Submit manuscript</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Browse
                            </a>
                            <ul className="dropdown-menu dropmen">
                                <li><Link class="dropdown-item" to={'/browse/currentIssue'}>Current issue</Link></li>
                                <li><Link class="dropdown-item" to={'/browse/ByIssue'}>By issue</Link></li>
                                <li><a class="dropdown-item" href="#">By subject</a></li>
                                <li><a class="dropdown-item" href="#"> Author index</a></li>
                                <li><a class="dropdown-item" href="#">keyword index</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link" to={'/contactUs'}>contact us</Link>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link" to={'/login'}>login</Link>
                        </li>
                        <li class="nav-item">
                         <Link class="nav-link" to={'/register'}>register</Link>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>
       </div>
    )
}
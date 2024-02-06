import headImg from '../images/head_en.jpg';
import '../App.css';
export default function HeaderImg(){
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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            jornal info
                        </a>
                        <ul className="dropdown-menu dropmen">
                            <li><a class="dropdown-item" href="#">About jornal</a></li>
                            <li><a class="dropdown-item" href="#">Aims and scope</a></li>
                            <li><a class="dropdown-item" href="#">Editorial Board</a></li>
                            <li><a class="dropdown-item" href="#">publication</a></li>
                            <li><a class="dropdown-item" href="#">indexing and abstracting</a></li>
                            <li><a class="dropdown-item" href="#">related links</a></li>
                            <li><a class="dropdown-item" href="#">FAQ</a></li>
                            <li><a class="dropdown-item" href="#">peer review process</a></li>
                            <li><a class="dropdown-item" href="#">news</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Author template</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">CTA</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">Guide for Author</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">Submit manuscript</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Browse
                            </a>
                            <ul className="dropdown-menu dropmen">
                                <li><a class="dropdown-item" href="#">Current issue</a></li>
                                <li><a class="dropdown-item" href="#">By issue</a></li>
                                <li><a class="dropdown-item" href="#">By subject</a></li>
                                <li><a class="dropdown-item" href="#"> Author index</a></li>
                                <li><a class="dropdown-item" href="#">keyword index</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">contact us</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">login</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#">register</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
       </div>
    )
}
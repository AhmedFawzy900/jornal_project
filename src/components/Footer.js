import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/Al Nouras.jpg';

export default function Footer(){
    return(
        <div id="footer">
            <div className="row">
                <div className="col-md-2">
                    <h4>Explore Journal</h4>
                    <ul className="footer-links list-unstyled">
                        <li id="fli_home">
                            <a href="#">Home</a>
                        </li>
                        <li id="fli_about">
                            <a href="#">About Journal</a>
                        </li>
                        <li id="fli_Edb">
                            <a href="#">Editorial Board</a>
                        </li>
                        <li id="fli_submit">
                            <a href="#">submit manuscript</a>
                        </li>
                        <li id="fli_contactus">
                            <a href="#">contact us</a>
                        </li>
                        <li id="fli_glossary">
                            <a href="#">Glossary</a>
                        </li>
                        <li id="fli_order_hard">
                            <a href="#">Hard Copy Subscription</a>
                        </li>
                        <li id="fli_sitemap">
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3">
                    {/* Latest News */}
                    <h4 class="">Latest News</h4>
                    <ul class="footer-posts list-unstyled"></ul>
                    {/*  /Latest News  */}

                </div>
                <div class="col-md-3">                    
                    <div></div>
                </div>
                <div class="col-md-4">
                    {/* <!-- Newsletter Form --> */}
                    <h4 class="">Newsletter Subscription</h4>
                    <p>Subscribe to the journal newsletter and receive the latest news and updates</p>

                    <form class="validate" action="" method="post">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input type="email" id="email" name="email" required="required" class="form-control required sbs_email" placeholder="Enter your Email" />
                            <span className="input-group-btn">
                                <button className="btn btn-primary mybtn" type="submit">Subscribe</button>
                            </span>
                        </div>
                    </form>
                    {/* <!-- /Newsletter Form --> */}

                    {/* <!-- Social Icons --> */}
                    <div class="margin-top-20">
                            <a  href="#" target="_blank" class=" noborder social-icon social-icon-border social-facebook pull-left block"  data-toggle="tooltip" data-placement="top" title="Facebook" >
                                 <i class="fa-brands fa-square-facebook"></i>									
                            </a>
                            <a href="#" target="_blank" class="noborder social-icon social-icon-border social-facebook pull-left block"  data-toggle="tooltip" data-placement="top" title="Twitter" >
                            <i class="fa-brands fa-square-twitter"></i>								
                            </a>
                            <a href="#" target="_blank" class="noborder social-icon social-icon-border social-facebook pull-left block"  data-toggle="tooltip" data-placement="top" title="Linkedin" >
                                <i class="fa-brands fa-linkedin"></i>									
                            </a>
                            <a href="#" class="noborder social-icon social-icon-border social-rss pull-left block" data-toggle="tooltip" data-placement="top" title="Rss">
                                <i class="fa fa-rss-square" aria-hidden="true"></i>
                            </a>
                    </div>
                    {/* logo */}
                    <div class="footer-logo col-md-6">
                        <img src={logo} className='w-100' alt="" />
                    </div>
                </div>

			</div>

				<div class="copyright">

						<ul class="nomargin list-inline mobile-block">
							<li>&copy; Copyright 2024. <span id='sp_crt'>Powered by <a target='_blank' href='#'>AL-NOURAS</a></span></li>
						</ul>

				</div>
        </div>

    );
}
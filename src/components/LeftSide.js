import CoverImg from '../images/cover.png';
import CoverImg1 from '../images/cover-2.png';
import CoverImg2 from '../images/cover-2.png';

import CollapseList from './CollapseList';

export default function LeftSide(){
    return(
        <div className='left-side col-lg-4 col-md-6 col-sm-12'>
            <div className='my-2'>
                <img src={CoverImg1} alt="cover" />
            </div>

            <div className="card">
                        <div className="card-header py-3">
                                 <h5 className="mb-0">Articles in Press</h5>
                        </div>
                        <div className="card-body">
                            <h5 className="mb-0">Current Issue</h5>
                         </div>
            </div>
            {/* drop down card */}
                <CollapseList/>
            {/* drop down card */}

            <div class="panel panel-default my_panel-default ">
                <div class="panel-body nopadding">
                    <div class="toggle-content padding-10">
                        <hr />
                        <p>&nbsp;</p>
                        <table class="col-md-12 table table-hover table-striped table-bordered" border="1">
                            <tbody>
                                <tr bgcolor="#dddddd">
                                    <td  colspan="2" align="center">Facts &amp; Figures</td>
                                </tr>
                                <tr>
                                    <td>Number of&nbsp;Volumes</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Number of&nbsp;Issues</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Number of Articles</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Article View</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>PDF Download</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>View Per Article</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>PDF Download Per Article</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                </div>
            </div>
            
    {/* end main div */}
    </div>

                           
                        
                                                    
                            

                
    );
        
    
}
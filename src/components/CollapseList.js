import { Link } from "react-router-dom";

export default function CollapseList(){
    return(
        <div class="panel panel-default my_panel-default ">
            <div class="panel-heading">
                <h3 class="panel-title">Journal Archive</h3>
            </div>
            <ul class="list-group collapse-list">
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse1" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 27 (2023)</span>
                    </div>
                    <div class="collapse" id="collapse1">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i><Link className='tag_a mx-2' to={'/browse/currentIssue'}>issue1</Link> </li>

                        </ul>
                    </div>
                </li>
                {/* <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 66 (2023)</span>
                    </div>
                    <div class="collapse" id="collapse2">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue13</li>
                            <li className="mx-4 small-font">Special Issue: Applied Chemistry for Greener Life and Sustainability</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue12</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue11</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue10</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue9</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue8</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue7</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 65 (2022)</span>
                    </div>
                    <div class="collapse" id="collapse3">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue132</li>
                            <li className="mx-4 small-font">Special Issue: Chemistry and Global Challenges (Part B)</li>
                            <li className="mx-4"><i class="fa-regular fa-file-lines"></i> issue131</li>
                            <li className="mx-4 small-font">Special Issue: Chemistry and Global Challenges (Part A)</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue12</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue11</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue10</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue9</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue8</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue7</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 64 (2021)</span>
                    </div>
                    <div class="collapse" id="collapse4">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue12</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue11</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue10</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue9</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue8</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue7</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 63 (2020)</span>
                    </div>
                    <div class="collapse" id="collapse5">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue12</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue11</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue10</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue9</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue8</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue7</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse6" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title">  Volume 62 (2019)</span>
                    </div>
                    <div class="collapse" id="collapse6">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i>  Special Issue (Part 2) Innovation in Chemistry</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> Special Issue (Part 1) Innovation in Chemistry</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> 2nd International Conference on Agricultural Biosystems (AGRIBIOS 2019) on 28,29 September 2019 in GBC meeting and conference room, Deira, Dubai, UAE.</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue12</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue11</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue10</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue9</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue8</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> The First International Conference on Molecular Modeling and Spectroscopy 19-22 February, 2019</li>
                            <li className="mx-4"><i class="fa-regular fa-file-lines"></i> The First International Conference on Molecular Modeling and Spectroscopy 19-22 February, 2019</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue7</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse7" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 61 (2018)</span>
                    </div>
                    <div class="collapse" id="collapse7">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> Conference issue (14th Ibn Sina Arab Conference on Heterocyclic Chemistry and its Applications (ISACHC 2018), 30 March-2 April 2018, Hurgada, Egypt).</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> Conference issue</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse8" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 60 (2017)</span>
                    </div>
                    <div class="collapse" id="collapse8">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i>  Conference Issue (The 8th International Conference of The Textile Research Division (ICTRD 2017), National Research Centre, Cairo 12622, Egypt.)</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse9" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 59 (2016)</span>
                    </div>
                    <div class="collapse" id="collapse9">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse10" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 58 (2016)</span>
                    </div>
                    <div class="collapse" id="collapse10">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse11" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title">  Volume 57 (2014)</span>
                    </div>
                    <div class="collapse" id="collapse11">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse12" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title">Volume 56 (2013)</span>
                    </div>
                    <div class="collapse" id="collapse12">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse13" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 55 (2012)</span>
                    </div>
                    <div class="collapse" id="collapse13">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse14" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title">  Volume 54 (2011)</span>
                    </div>
                    <div class="collapse" id="collapse14">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="tag_a d-flex align-items-center" data-bs-toggle="collapse" href="#collapse15" aria-expanded="false" aria-controls="collapseExample1">
                        <span className="icon"><i class="fa-solid fa-plus"></i></span>
                        <span className="collapse-title"> Volume 53 (2010)</span>
                    </div>
                    <div class="collapse" id="collapse15">
                        <ul class="list-unstyled mt-2">
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue5</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue6</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue4</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue3</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue2</li>
                            <li className="mx-4 "><i class="fa-regular fa-file-lines"></i> issue1</li>
                        </ul>
                    </div>
                </li> */}
                
                
                    {/* <!-- Add more items here --> */}
            </ul>
        </div>

    );
}
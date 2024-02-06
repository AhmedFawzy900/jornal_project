export default function Search(){
    return(
        <div>
            <div class="panel panel-search panel-default my_panel-default ">
                <div class="panel-heading">
                    <h3 class="panel-title">Search</h3>
                </div>
                <div class="panel-body">

                    <div class="searchBox">
                        <form action="./" className="search-form" method="get">
                            <input type="text" class="form-control" name="keywords" placeholder=""/>
                            <button type="submit" class="btn"> 
                                <span class="fa fa-search" aria-hidden="true"></span>
                            </button>
                        </form>
                    </div>
                    <div class="text-right"><a className="search-text" href="#">Advanced Search</a></div>
                </div>
            </div>
        </div>
    );
}
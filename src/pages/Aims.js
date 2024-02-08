import React from 'react'
import { Link } from 'react-router-dom'
function Aims() {
    return (
    <div className='container'>
        <h3 className='title about-title mb-4'>Aims and Scope</h3>
        <p className='text about-p'>
        
        The Egyptian Journal of Chemistry, a multidisciplinary chemistry journal,
        is a peer reviewed international journal, a free access journal and edited 
        by the <Link to={"/"}>Egyptian Chemical Societ</Link> and published monthly by NIDOC . Manuscripts 
        that truly define the aims of the journal include, the fields of analytical,
        inorganic, organic, physical chemistry, applied and materials chemistry
        as well as all other branches of chemistry and its sub–disciplines like 
        pharmaceutical, textile, environmental chemistry, biochemistry, polymer
        chemistry, food chemistry, petroleum chemistry, and agricultural chemistry, 
        material science etc.
       
        </p>
    </div>
    )
}

export default Aims
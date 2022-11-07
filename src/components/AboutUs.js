import React from 'react';
import Navbar from '../navbar/Navbar';
function AboutUs(){
    return(
        <div className="container mb-3 lg-12" >
           <Navbar/>
         <div>
          <h1>ABOUT</h1>
           <p>(Some)</p>
            <p>Access to health care may vary across countries, communities, and individuals, influenced by social and economic conditions as well as health policies. Providing health care services means "the timely use of personal health services to achieve the best possible health outcomes".[2] Factors to consider in terms of health care access include financial limitations (such as insurance coverage), geographic barriers (such as additional transportation costs, the possibility to take paid time off work to use such services), and personal limitations (lack of ability to communicate with health care providers, poor health literacy, low income).[3] Limitations to health care services affects negatively the use of medical services, the efficacy of treatments, and overall outcome (well-being, mortality rates).</p>
         </div>
        </div>
    )
}
export default AboutUs;
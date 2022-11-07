
import React, {  useState } from "react";
import Navbar from '../navbar/Navbar';

function OurScience(){
    const [About, setAbout] = useState(false);
    const [Intimations, setIntimations] = useState(false);
    const [Abstracts, setAbstracts] = useState(false);
    const [Devices, setDevices] = useState(false);
    const [Milesstones, setMilestones] = useState(false);
    
   
    return (
        <div>
         <Navbar/>
            <main>
            {
            About && (
                <div >
                    <h3>About</h3>
                    <p>Medicine is the science and practice of caring for a patient, managing the diagnosis, prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.</p>
                </div>
            )
        }
        {
            Intimations && (
                <div>
                    <h3>Intimations</h3>
                    <p>Doctors and nurses are no strangers to having a lot of medical reports to write, summarize, study, evaluate and even read. Even during a busy day in the hospital, they are still bombarded with reports that range about the patient, the cause of the issue and the results of the examinations being taken. Having to go through a lot of these while working in a busy hospital can also take its toll. But all that could change or at least lessened. The key to making it less of a deal having to write a lot of reports especially medical reports is to make a summary of them. Basically by making a medical summary report</p>
                </div>
            )
        }
        {
            Abstracts && (
                <div>
                    <h3>Abstracts</h3>
                    <p>The abstract for your medical research is arguably the most important piece of your manuscript. Although brief, typically between 300-500 words, the abstract is a summary of the key aspects of your research. Some researchers find it almost impossible to sum up sometimes years of hard work in just a few paragraphs, but that’s exactly what the abstract is designed to do. You want to pique the interest of your reader so that they’ll want to delve further. A well-written abstract can increase citations, conference presentation invitations and publication opportunities.

In this article, we’ll cover the core ingredients of a solid medical research abstract, how to write a medical research abstract as well as how to write a clinical abstract. We’ll also cover a checklist to make sure you have everything to submit your abstract for a presentation.</p>
                </div>
            )
        }
        {
            Devices && (
                <div>
                    <h3>Devices</h3>
                    <p>The Central Drugs Standard Control Organisation(CDSCO) under Directorate General of Health Services,Ministry of Health & Family Welfare,Government of India is the National Regulatory Authority (NRA) of India. Its headquarter is located at FDA Bhawan, Kotla Road, New Delhi 110002 and also has six zonal offices,four sub zonal offices,thirteen Port offices and seven laboratories spread across the country.

Under the Drugs and Cosmetics Act, CDSCO is responsible for approval of New Drugs, Conduct of Clinical Trials, laying down the standards for Drugs, control over the quality of imported Drugs in the country and coordination of the activities of State Drug Control Organizations by providing expert advice with a view of bring about the uniformity in the enforcement of the Drugs and Cosmetics Act.</p>
                </div>
            )
        }
        {
            Milesstones && (
                <div>
                    <h3>Milesstones</h3>
                    <p>Historical accounts say Morton hoped to make a fortune off his “discovery,” but he ran into many snags before and afterward. Morton worked with another dentist, Horace Wells. In 1845, just one year before the first successful surgery with anesthesia, Morton and Wells had been experimenting with nitrous oxide (“laughing gas”). During one infamous demonstration at Harvard Medical School in 1845, the two dentists failed at deadening the pain of a subject having a tooth pulled, causing major humiliation for both men.</p>
                </div>
            )
        }
           
                <div >
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setAbout(!About);
                      setIntimations(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(false);

                    }}>
                        About
                    </button>
                    
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(!Intimations);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(false);
                    }}>
                        Intimations
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(!Abstracts);
                      setDevices(false);
                      setMilestones(false);
                    }}>
                        Abstracts
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(!Devices);
                      setMilestones(false);
                    }}>
                        Devices
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(!Milesstones);
                    }}>
                        Milestones
                    </button>
                </div>
            </main>
        
       
        </div>
    );
}
   
export default OurScience;
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getallUsers } from './Data';
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./Display.module.css"
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../navbar/Navbar';
// import styles from './PatientDetails.css'
const Display = () => {
    let { id } = useParams()
    let [patient, setPatient] = useState("");
    let src = "https://www.w3schools.com/w3css/img_avatar3.png";
    const loadUserData = async (id) => {
        console.log(id)
        const response = await getallUsers(id);
        console.log(response)
        setPatient(response.data);
        
    }
    useEffect(() => {
        loadUserData(id);
    }, [id]);
    let navigate = useNavigate()
    return (
        <div>
            <Navbar/>
        <div className='row'>
            <h3 className='text-white text-center m-2 p-0'>PATIENT DETAILS</h3>
            {/* <h3>{id}</h3> */}
            <div className="col-8 col-md-6 m-auto " key={patient.id}>
                <div className={`card  p-4 x mb-2`} key={patient.id} style={{ borderRadius: 0, height: "300px" }}>
                    <img src={'https://dresden-handchirurgie.de/wp-content/uploads/2016/09/profile_placeholder-1024x1024.png'} className="card-img-top m-2 p-2 m-auto" style={{ height: "90px", width: "75%", marginTop: "5%" }} alt="..." />
                    <div className="card-body p-0 m-0">
                        <h5 className={`font-weight-bold ${styles.pSizeSmaller}`}>{patient.name}</h5>
                        {/* <p className={styles.pSizeSmaller}> {item.email}</p> */}
                        <p className='card-Text'>{patient.email}</p>
                        <p className='card-Text'>{patient.contact}</p>
                        <p className='card-Text'>{patient.id}</p>
                        <p className='card-Text'>{patient.name}</p>
                        
                    </div>
                </div>
            </div>
            <div className='row m-0 p-0'>
                <button type="button" style={{ borderRadius: "0px" }} onClick={() => navigate('/')} className=' col-8 col-md-6 m-auto  btn btn-primary btn-md m-auto '>Back</button>
            </div>
        </div>
        </div>
    )
}
export default Display
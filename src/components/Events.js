import React, { useState } from 'react'
import { addUser } from './Data'
import { v4 as uuid } from 'uuid'
import Navbar from '../navbar/Navbar'

const Events = () => {
    let [state, setState] = useState({
        username: "",
        email: "",
        contact: ""
    })
    let [errState, setErrState] = useState({
        username_err_msg: "",
        email_err_msg: "",
        contact_err_msg: "",
    })
    let { username, email, contact } = state
    let { username_err_msg, email_err_msg, contact_err_msg } = errState
    let clearForm = () => {
        setState({
            username: "",
            email: "",
            contact: "",
        })
        setErrState({
            username_err_msg: "",
            email_err_msg: "",
            contact_err_msg: "",
        })
    }
    function formValidation(event) {
        let result;
        
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
        const re_username = /^[A-Za-z0-9_]+$/g;
        const re_email = /^\S+@\S+\.\S+$/g;
        console.log(event.target.name);
       
        if (event.target.name == "contact") {
            result = contact.match(re)
            if (result) {
                console.log("Matched contact EXpression");
                setErrState({
                    ...errState,
                    contact_err_msg: "",
                })
            } else {
                setErrState({
                    ...errState,
                    contact_err_msg: "Please Enter valid Contact Number",
                })
                console.log("Contact error msg SET");
            }
        }
        if (event.target.name == "username") {
            console.log(username + "username..>");
            result = username.match(re_username)
            console.log(result);
            if (result) {
                setErrState({
                    ...errState,
                    username_err_msg: "",
                })
                console.log("Matched username EXpression");
            }
            else {
                setErrState({
                    ...errState,
                    username_err_msg: "Please Enter valid username",
                })
                console.log("Invalid username FORMAT, err msg set");
            }
        }
        if (event.target.name == "email") {
            result = email.match(re_email)
            if (result) {
                setErrState({
                    ...errState,
                    email_err_msg: "",
                })
                console.log("Matched email EXpression");
            }
            else setErrState({
                ...errState,
                email_err_msg: "Please Enter valid Mail",
            })
        }
    }
    let changeHandler = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const addUserDetails = async () => {
        const unique_id = uuid()
        const small_id = unique_id.slice(0, 8)
        state["id"] = small_id
        await addUser(state);
        // history.push('/all');
        console.log("user added SUCCESSFULLY" + state["id"])
        clearForm()
    }
    let submitHandler = (event) => {
        event.preventDefault()
        if (username_err_msg.length == 0 && contact_err_msg.length == 0 && email_err_msg.length == 0) {
            console.log("No errors");
            console.log(state);
            addUserDetails();
            alert(`Your registration completed`);
        }
       
    }
    return (
        <div className='container mt-4' >
            <Navbar/>
            
            <p className='labelEvent transparent'> Submit your details to get event updates</p>
            <form onSubmit={submitHandler} >
                <div className='container mb-4'>
                <div className="row mb-4">
                   <label  className='labelEvent'>UserName</label>
                    <div className="col-sm-5">
                    <input type='text' onBlur={formValidation} required onChange={changeHandler} name='username' value={username} className='form-control inputEvent' id='exampleInputEmail1' aria-describedby='emailHelp' ></input>
                        <p className='mt-2 text-danger'>{username_err_msg}</p>
                    </div>
                    </div>
                    <div className="row mb-4">
                    <label  className='labelEvent'>Email</label>
                    <div className="col-sm-5">
                    <input type='email' onBlur={formValidation} required onChange={changeHandler} name='email' value={email} className='inputEvent form-control' id='exampsword1'></input>
                        <p className='mt-2 text-danger'> {email_err_msg}</p>
                    
                    </div>
                    </div>

                    
                    <div className="row mb-4">
                    <label  className='labelEvent'>ContactNumber</label>
                    <div className="col-sm-5">
                    <input type='text' required onBlur={formValidation} onChange={changeHandler} name='contact' value={contact} className='inputEvent form-control' id='ePassword1'></input>
                        <p className='mt-2 text-danger'>{contact_err_msg}</p>
                    
                    </div>
                    </div>
                    
                    <div className="row mb-4">
                    <label className="col-sm-2 col-form-label "></label>
                    <div className="col-sm-10 ">
                    <button className="btn borderThick border-white  m-2  col"   onClick={clearForm} type="reset"name="button " >Clear</button>   
                    <button className="btn borderThick border-white  m-2  col"  type="submit" name="button">Submit</button>
                    </div>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
export default Events;

// import React, {  useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import Navbar from "../navbar/Navbar";
// import { v4 as uuid } from 'uuid'
// function Events() {

//     const [formvalue, setFormvalue]= useState({ name:'',email:'',contact:''});
//     const [formerror, setFormerror] = useState({});
//     const [issubmit, setSubmit]= useState(false);

//     const handlevalidation =(e)=>{
//         const {name, value}= e.target;
//         setFormvalue({...formvalue, [name]: value});
//     }

//     const handlesubmit= (e)=>{
//         e.preventDefault();
//         setFormerror(validationform(formvalue));
//         setSubmit(true);
//         const addUserDetails = async () => {
//             const unique_id = uuid()
//             const small_id = unique_id.slice(0, 8)
//             state["id"] = small_id
//             await addUser(state);
//             // history.push('/all');
//             console.log("user added SUCCESSFULLY" + state["id"])
//         console.log("beforeclear",formvalue);
//         handleclear();
       

//     }
//     const handleclear=(e)=>{
//         setFormvalue({
//             ...formvalue,
//             name:"",
//             email: "",
//             contact:""
//           });
         
//     }

//     const validationform = (value)=>{
//         const errors= {};
//         const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         const contactPattern=/^[0-9\b]+$/;
//         if(!value.name){
//             errors.name="Please Enter Name";
//         }

//         if(!value.email){
//             errors.email="Please Enter Email";
//         } else if(!emailPattern.test(value.email))
//         {
//             errors.email="Enter Valid Email";
//         }
//         if(!value.contact){
//             errors.contact="Please enter Contact";
//         }else if(!contactPattern.test(value.contact)){
//             errors.contact="Enter valid Contact";
//         }
    
//         return errors;
//     }

//     useEffect( ()=>{

//         if(Object.keys(formerror).length===0 && issubmit)
//         {
//             console.log(formvalue);
//         }
//     },[formerror, formvalue, issubmit]);

//  return (
//     <React.Fragment>
//       <Container>
//         <Navbar/>
//       <div className="row mb-5">
//           <div className="col-sm-6 text-success">
//             <h3 className="p-3 fw-bold text-white">Submit your details to get events updates </h3>
//              </div>

//             <form onSubmit={ handlesubmit} >

                //    <div className="row mb-4">
                //    <label  className='labelEvent'>UserName</label>
                //     <div className="col-sm-5">
                //     <input type="text" className="form-control" name="name" value={ formvalue.name}  onChange={ handlevalidation} />
                //     <span className="text-danger">{ formerror.name } </span>
                //     </div>
                //     </div>

                    // <div className="row mb-4">
                    // <label  className='labelEvent'>Email</label>
                    // <div className="col-sm-5">
                    // <input type="text" className="form-control" name="email" value={ formvalue.email} onChange={ handlevalidation}   />
                    // <span className="text-danger">{ formerror.email}  </span>
                    // </div>
                    // </div>

                    // <div className="row mb-4">
                    // <label  className='labelEvent'>ContactNumber</label>
                    // <div className="col-sm-5">
                    // <input  className="form-control" name="contact" value={ formvalue.contact} onChange={ handlevalidation}   />
                    // <span className="text-danger">{ formerror.contact}  </span>
                    // </div>
                    // </div>
                    // <div className="row mb-4">
                    // <label className="col-sm-2 col-form-label "></label>
                    // <div className="col-sm-10 ">
                    // <button className="btn borderThick border-white  m-2  col"   onClick={ ()=>handleclear()} type="reset"name="button " >Clear</button>   
                    // <button className="btn borderThick border-white  m-2  col"  type="submit" name="button">Submit</button>
                    // </div>
                    // </div>

//                 </form>


            
             
//             </div>
//       </Container>
//     </React.Fragment>
//   );
// }

// export default Events;
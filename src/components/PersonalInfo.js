import './PersonalInfo.css'
import { useState } from 'react'
function PersonalInfo({ state, Dispatch,}) {
    const [FormData, setFormData] = useState({
        username: "",
        mail: "",
        phoneNumber: "",
    })
    function handleName(e) {
        setFormData({ ...FormData, username: e.target.value })
        
    }
    function Nameblur() {
        state.NameLength = FormData.username
        
    }
    function Mailblur() {
        state.EmailLength = FormData.phoneNumber
    
    }
    function Phoneblur() {
        state.PhoneLength = FormData.phoneNumber
        
}

    return (
        <div className="container-fluid personalInfo position-relative p-md-5">
            <div className="row ">
                <div className="col-md-12 mb-md-3   ">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                    <form className='form container'>
                        <div className='row'>
                            <label className='mb-md-2' htmlFor='name'>Name</label>
                            <input value={FormData.username} onChange={(e) => handleName(e)} onBlur={() => Nameblur()} name='fullName' type='text' id='name' className={`p-md-3 mb-md-2 mb-2 p-2 ${state.NameAlert}`} placeholder='e.g ds King' />
                           {state.NameLength>0?"": <span className='error'>{state.nameError}</span>}
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='mail'>Email Address</label>
                            <input  value={FormData.mail} onBlur={()=>Mailblur()} onChange={(e) => setFormData({ ...FormData, mail: e.target.value })}  name='email' type='text' id='mail' className={`p-md-3 mb-md-2 p-2 mb-2 ${state.MailAlert}`} placeholder='e.g. stephenking@lorem.com' />
                            <span className='error'>{state.mailError }</span>
                            
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='phone'>Phone Number</label>
                            <input  onBlur={()=>Phoneblur()} onChange={(e) => setFormData({ ...FormData, phoneNumber: e.target.value })} name='phoneNumber' type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"   id='phone' className={`p-md-3 p-2 ${state.PhoneAlert}`} placeholder='e.g. +1 234 567 890' />
                            <span className='error'>{state.phoneError }</span>
                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo
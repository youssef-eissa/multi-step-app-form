import './PersonalInfo.css'
import { useState } from 'react'
function PersonalInfo({ state, Dispatch,theName,setName}) {
    const [FormData, setFormData] = useState({
        username: "",
        mail: "",
        phoneNumber:""
    })

    return (
        <div className="container-fluid personalInfo position-relative p-md-5">
            <div className="row ">
                <div className="col-md-12 mb-md-3   ">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                    <form className='form container'>
                        <div className='row'>
                            <label className='mb-md-2' htmlFor='name'>Name</label>
                            <input value={FormData.username} onChange={(e)=>setFormData({...FormData,username:e.target.value})} name='fullName' type='text' id='name' className='p-md-3 mb-md-2 mb-2 p-2' placeholder='e.g ds King' />
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='mail'>Email Address</label>
                            <input  value={FormData.mail} onChange={(e)=>setFormData({...FormData,mail:e.target.value})}   name='email' type='text' id='mail' className='p-md-3 mb-md-2 p-2 mb-2' placeholder='e.g. stephenking@lorem.com'/>
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='phone'>Phone Number</label>
                            <input value={FormData.phoneNumber} onChange={(e)=>setFormData({...FormData,phoneNumber:e.target.value})}   name='phoneNumber' type='text' id='phone' className='p-md-3 p-2' placeholder='e.g. +1 234 567 890'/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo
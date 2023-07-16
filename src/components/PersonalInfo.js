import './PersonalInfo.css'
function PersonalInfo({ state, Dispatch,form,setForm}) {
   
  

    return (
        <div className="container-fluid personalInfo position-relative p-md-5">
            <div className="row ">
                <div className="col-md-12 mb-md-3   ">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                    <form className='form container'>
                        <div className='row'>
                            <label className='mb-md-2' htmlFor='name'>Name</label>
                            <input value={form.name} onChange={(e) => {setForm({...form,name:e.target.value}) }} name='fullName' type='text' id='name' className={`p-md-3 mb-md-2 mb-2 p-2 ${form.name.length===0?state.NameAlert:""}`} placeholder='e.g ds King' />
                           {state.NameLength>0?"": <span className='error'>{form.name.length===0?state.nameError:""}</span>}
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='mail'>Email Address</label>
                            <input   value={form.email} onChange={(e) => {setForm({...form,email:e.target.value}) }}  name='email' type='text' id='mail' className={`p-md-3 mb-md-2 p-2 mb-2 ${state.MailAlert}`} placeholder='e.g. stephenking@lorem.com' />
                            <span className='error'>{state.mailError }</span>
                            
                        </div>
                         <div className='row'>
                            <label className='mb-md-2' htmlFor='phone'>Phone Number</label>
                            <input  value={form.phone} onChange={(e) => {setForm({...form,phone:e.target.value}) }}   name='phoneNumber' type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"   id='phone' className={`p-md-3 p-2 ${state.PhoneAlert}`} placeholder='e.g. +1 234 567 890' />
                            <span className='error'>{state.phoneError }</span>
                            
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo
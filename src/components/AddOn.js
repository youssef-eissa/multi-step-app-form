// import {  useState } from 'react'
import './AddOn.css'
function AddOn({ state, dispatch,toggle,setToggle }) {
   
    function handleOnline() {
        setToggle({...toggle,online:!toggle.online})
        toggle.online ? dispatch({ type: "noOnlineCheckAddOn" }) : dispatch({ type: "OnlineCheckAddOn" })
    }
    function handleStorage() {
        setToggle({...toggle,storage:!toggle.storage})
        toggle.storage ? dispatch({ type: "noStorageCheckAddOn" }) : dispatch({ type: "StorageCheckAddOn" })
        
    }
    function handleProfile() {
        setToggle({...toggle,profile:!toggle.profile})
        toggle.profile ? dispatch({ type: "noProfileCheckAddOn" }) : dispatch({ type: "ProfileCheckAddOn" })
        
    }

    return (
        <div className='conatiner addon p-md-5 '>
            <div className='row mb-md-3'>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='row pp px-md-0 px-2'>
                <label   className='col-md-12 d-flex p-3 mb-3 ' htmlFor='online'>
                    <input checked={toggle.online}  value="online"  onChange={()=>handleOnline()}  type='checkbox' id='online' name='plan' />
                    <div className='details d-flex col-12 px-3 justify-content-between align-items-center'>
                        <div className='adds '>
                            <h6 className='m-0'>Online Service</h6>
                        <p className='m-0'>Access to multiplayer games</p>
                        </div>
                        {state.duration === "Monthly" ? <div className='price'>${state.AddOnOnlinePrice}/mo</div> : <div className='price'>${state.AddOnOnlinePrice}/yr</div>}
                    </div>
                </label>
                <label className='col-md-12 d-flex p-3 mb-3' htmlFor='storage'>
                    <input checked={toggle.storage} onChange={() => handleStorage()} value="Storage"   type='checkbox' id='storage' name='plan' />
                    <div className='details d-flex col-12 px-3 justify-content-between align-items-center'>
                        <div className='adds '>
                            <h6 className='m-0'>Larger storage</h6>
                        <p className='m-0'>Extra 1TB of cloud save</p>
                        </div>
                        {state.duration === "Monthly" ? <div className='price'>${state.AddOnStoragePrice }/mo</div>:<div className='price'>${state.AddOnStoragePrice }/yr</div>}
                    </div>
                </label>
                  <label className='col-md-12 d-flex p-3 ' htmlFor='profile'>
                    <input checked={toggle.profile} onChange={()=>handleProfile()} type='checkbox' id='profile' name='plan'  />
                    <div className='details d-flex col-12 px-3 justify-content-between align-items-center'>
                        <div className='adds '>
                            <h6 className='m-0'>Customizable Profile</h6>
                        <p className='m-0'>Custom theme on your profile</p>
                        </div>
                        {state.duration==="Monthly"?<div className='price'>${state.AddOnProfilePrice }/mo</div>:<div className='price'>${state.AddOnProfilePrice }/yr</div>}
                    </div>
                </label>
            </div>
        </div>
    )
}
export default AddOn
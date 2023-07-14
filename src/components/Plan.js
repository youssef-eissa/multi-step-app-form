import './Plan.css'
import arcadeImg from './images/icon-arcade.svg'
import advImg from './images/icon-advanced.svg'
import proImg from './images/icon-pro.svg'

function Plan({state ,dispatch}) {
    
    return (
        <div className="container position-relative plan p-md-5 ">
            <div className="row mb-md-3 mt-md-0 plann  ">
                <h1 className='m-0'>Select Your Plan</h1>
                <p className='m-0'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className=' middd row radioInput d-flex justify-content-md-between mt-md-0 mx-auto  '>
                    <label  className='col-md-3 p-md-3 d-flex d-md-inline align-items-center mb-md-0 mb-2' htmlFor='arcade'>
                        <div className='mb-md-5'>
                        <img className='' src={arcadeImg} alt='arcade' />

                        </div>
                        <div className='text ms-2 ms-md-0 p-md-0 p-1 '>
                            <h3 className='title m-md-1 m-0 '>Arcade</h3>
                        {state.duration === "Monthly" ? <span className='price'>${ state.arcadeprice}/mo</span> : <span className='price'>${ state.arcadeprice}/yr</span>}
                        <p className={`free my-md-1 m-0 ${state.invisible}`}>2 Month Free</p>
                    </div>
                    <input onChange={()=>dispatch({type:"arcadeRadioSelect"})} value="arcade" checked={state.plan==="Arcade"} type='radio' id='arcade' className='invisible' name='plan' />
                    
                </label>
                  <label className='col-md-3 p-md-3 d-md-inline d-flex align-items-center mb-md-0 mb-2' htmlFor='adv'>
                        <div className='mb-md-5'>
                        <img className='' src={advImg} alt='adv' />

                        </div>
                        <div className='text ms-2 ms-md-0 p-md-0 p-1'>
                            <h3 className='title m-md-1 m-0 '>Advanced</h3>
                        {state.duration === "Monthly" ? <span className='price'>${ state.advancedPrice}/mo</span> : <span className='price'>${ state.advancedPrice}/yr</span>}
                        <p className={`free my-md-1 m-0 ${state.invisible}`}>2 Month Free</p>
                    </div>
                    <input onChange={()=>dispatch({type:"advancedRadioSelect"})}  value="advanced" checked={state.plan==="Advanced"} type='radio' id='adv' className='invisible' name='plan' />
                    
                </label>
                  <label  className='col-md-3 p-md-3 d-md-inline d-flex align-items-center mb-md-0 ' htmlFor='pro'>
                        <div className='mb-md-5'>
                        <img className='' src={proImg} alt='arcade' />

                        </div>
                        <div className='text ms-2 ms-md-0 p-md-0 p-1'>
                        <h3 className='title m-md-1 m-0'>Pro</h3>
                        {state.duration === "Monthly" ? <span className='price'>${state.proPrice }/mo</span> : <span className='price'>${state.proPrice }/yr</span>}
                        <p className={`free my-md-1 m-0 ${state.invisible}`}>2 Month Free</p>
                        
                    </div>
                    <input onChange={()=>dispatch({type:"proRadioSelect"})} value="pro" checked={state.plan==="Pro"} type='radio' id='pro' className='invisible' name='plan' />
                    </label>
            </div>
            <div className=' switchh row mt-md-5 py-md-3 py-2  col-12   text-center duration d-flex'>
                <div className='col-md-5 col-4 text-end px-0'>
                    Monthly
                </div>
                <div onClick={()=>state.switchDuration===""?dispatch({type:"YearlyDuration"}):dispatch({type:"MonthlyDuration"})} className='check  position-relative  col-md-2 col-4'>
                    <span className='position-absolute bar p-2 w-50 h-100 translate-middle top-50 '>
                        <span className={`ball position-absolute  p-1 h-50 translate-middle top-50 ${state.switchDuration} ` }></span>
                    </span>
                </div>
                <div className='col-md-5 col-4 px-0 text-start'>
                    Yearly
                </div>
            </div>
        </div>
    )
}
export default Plan
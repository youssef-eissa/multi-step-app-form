import './Summary.css'
function Summary({state,dispatch}) {
    return (
        <div className="container summary p-md-5">
            <div className="row">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div className=" row recipt p-4 mb-md-0 mb-3">
                <div className='col-12 d-flex align-items-center justify-content-between'>
                    <div className='name'>
                        <span className='fw-bold'> {state.plan} ({state.duration}) </span>
                        <div onClick={()=>dispatch({type:"change"})} className=' mb-md-3 mb-2  text-decoration-underline change mt-md-2'>Change</div>
                    </div>
                    {state.duration === "Monthly" ? <div className='addsprice fw-bold'>${state.MonthlyFinalPrice}/mo</div> : <div className='addsprice fw-bold'>${state.YearlyFinalPrice }/yr</div>}
                </div>
                <hr></hr>
                <div className={`col-md-12 justify-content-between align-items-center mb-3 ${state.AddOnOnlineDisplay}`}>
                    <span className='adds'>Online Service</span>
                    {state.duration === "Monthly" ? <span className='addsprice'>+${state.OnlineFinalPriceM}/mo</span> : <span className='addsprice'>+${ state.OnlineFinalPriceY}/yr</span>}
                </div>
                 <div className={`col-md-12 justify-content-between align-items-center mb-3 ${state.AddOnStorageDisplay}`}>
                    <span className='adds'>Larger storage</span>
                    {state.duration === "Monthly" ? <span className='addsprice'>+${state.StorageFinalPriceM}/mo</span> : <span className='addsprice'>+${ state.StorageFinalPriceY}/yr</span>}
                </div>
                 <div className={`col-md-12 justify-content-between align-items-center mb-3 ${state.AddOnProfileDisplay}`}>
                    <span className='adds'>Customizable Profile</span>
                    {state.duration === "Monthly" ? <span className='addsprice'>+${state.ProfileFinalPriceM}/mo</span> : <span className='addsprice'>+${ state.ProfileFinalPriceY}/yr</span>}
                </div>
            </div>
            <div className='row d-flex justify-content-between align-items-center mt-md-5'>
                <div className='total col-6'>Total (per {state.duration === "Monthly" ? "month" : "year"})</div>
                <div className='totalprice col-6 text-end'>{state.duration==="Monthly"?`$${state.MonthlyFinalPrice+state.ProfileFinalPriceM+state.StorageFinalPriceM+state.OnlineFinalPriceM}/mo`:`$${state.ProfileFinalPriceY+state.StorageFinalPriceY+state.OnlineFinalPriceY+state.YearlyFinalPrice}/yr` }</div>
            </div>
        </div>
    )
}
export default Summary
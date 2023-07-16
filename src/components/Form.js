import { useReducer, useState,} from 'react'
import './MainForm.css'
import PersonalInfo from './PersonalInfo'
import Plan from './Plan'
import AddOn from './AddOn'
import Summary from './Summary'
import End from './End'



function Form() {
    

    const [toggle, setToggle] = useState({
        online: false,
        storage: false,
        profile:false
    })

function formReducer(state, action) {
        switch (action.type) {
            case "nextpage": return { ...state, page: state.page + 1 }
            
            case "prevpage": return { ...state, page: state.page - 1, NameAlert: state.NameAlert = "", nameError: state.nameError = "", mailError: state.mailError = "" }
            
            case "name" :return{...state,fullname:state.fullname =action.payload}
            
            case "NameinfoAlert": return { ...state, NameAlert: state.NameAlert = "red", nameError: state.nameError = "Your Name Is Required" }

            case "noNameinfoAlert": return { ...state, NameAlert: state.NameAlert = "", nameError: state.nameError = "" }
            
            case "EmailinfoAlert": return { ...state, MailAlert: state.MailAlert = "red", mailError: state.mailError = "Your Email Is Required" }
            
            case "PhoneinfoAlert" :return{...state, PhoneAlert:state.PhoneAlert="red",phoneError:state.phoneError="Your Phone Number Is Required"}

            case "arcadeRadioSelect": return { ...state, plan: state.plan = "Arcade" , MonthlyFinalPrice:state.MonthlyFinalPrice=9,YearlyFinalPrice:state.YearlyFinalPrice=90 , MonthlytotalPrice:state.MonthlytotalPrice + 9,YearlytotalPrice:state.YearlytotalPrice+90 }
            
            case "advancedRadioSelect": return { ...state, plan: state.plan = "Advanced", MonthlyFinalPrice:state.MonthlyFinalPrice=12,YearlyFinalPrice:state.YearlyFinalPrice=120 }
            
            case "proRadioSelect": return { ...state, plan: state.plan = "Pro", MonthlyFinalPrice: state.MonthlyFinalPrice = 15, YearlyFinalPrice: state.YearlyFinalPrice = 150 , }
            
            case "OnlineCheckAddOn": return { ...state, AddOnOnlineCheck: state.AddOnOnlineCheck = "Online", AddOnOnlineDisplay: state.AddOnOnlineDisplay = "d-flex", OnlineFinalPriceM: state.OnlineFinalPriceM = 1, OnlineFinalPriceY: state.OnlineFinalPriceY = 10 }
            
             case "noOnlineCheckAddOn": return { ...state, AddOnOnlineCheck: state.AddOnOnlineCheck = "Online", AddOnOnlineDisplay: state.AddOnOnlineDisplay = "d-none" ,OnlineFinalPriceM:state.OnlineFinalPriceM=0,OnlineFinalPriceY:state.OnlineFinalPriceY=0 }
            
            case "StorageCheckAddOn": return { ...state, AddOnStorageCheck: state.AddOnStorageCheck = "Storage", AddOnStorageDisplay: state.AddOnStorageDisplay = "d-flex", StorageFinalPriceM: state.StorageFinalPriceM = 2, StorageFinalPriceY: state.StorageFinalPriceY = 20 }
            
            case "noStorageCheckAddOn": return { ...state,   AddOnStorageCheck: state.AddOnStorageCheck = "Storage", AddOnStorageDisplay: state.AddOnStorageDisplay = "d-none",StorageFinalPriceM:state.StorageFinalPriceM=0,StorageFinalPriceY:state.StorageFinalPriceY=0 }
            
            case "ProfileCheckAddOn": return { ...state, AddOnProfileCheck: state.AddOnProfileCheck = "Profile", AddOnProfileDisplay: state.AddOnProfileDisplay = "d-flex", ProfileFinalPriceM: state.ProfileFinalPriceM = 2, ProfileFinalPriceY: state.ProfileFinalPriceY = 20 }
            
            case "noProfileCheckAddOn": return { ...state, AddOnProfileCheck: state.AddOnProfileCheck = "Profile", AddOnProfileDisplay: state.AddOnProfileDisplay = "d-none",ProfileFinalPriceM:state.ProfileFinalPriceM=0,ProfileFinalPriceY:state.ProfileFinalPriceY=0 }

            case "MonthlyDuration": return { ...state, switchDuration: state.switchDuration = "", duration: state.duration = "Monthly", arcadeprice: state.arcadeprice = 9, advancedPrice: state.advancedPrice = 12, proPrice: state.proPrice = 15, AddOnProfilePrice:state.AddOnProfilePrice=2,AddOnStoragePrice:state.AddOnStoragePrice=2,AddOnOnlinePrice:state.AddOnOnlinePrice=1, invisible:state.invisible="invisible"}

            case "YearlyDuration": return { ...state, switchDuration: state.switchDuration = "right", duration: state.duration = "Yearly", arcadeprice: state.arcadeprice = 90, advancedPrice: state.advancedPrice = 120, proPrice: state.proPrice = 150, AddOnProfilePrice: state.AddOnProfilePrice = 20, AddOnStoragePrice: state.AddOnStoragePrice = 20, AddOnOnlinePrice: state.AddOnOnlinePrice = 10,invisible:state.invisible="" }

            case "change":return{...state,page:state.page=1}
            default: return state
    }
}
    
    const [state, dispatch] = useReducer(formReducer, {
        page: 0,
        fullname: "dsa",
        mail: "",
        phone: "",
        plan: "",
        duration: "Monthly",
        switchDuration: "",
        chooseAddOn: "",
        arcadeprice: 9,
        arcadepriceY:90,
        advancedPrice: 12,
        advancedPriceY:120,
        proPrice: 15,
        proPriceY:150,
        MonthlyFinalPrice: 0,
        YearlyFinalPrice: 0,
        AddOnOnlineCheck:"",
        AddOnStorageCheck:"",
        AddOnProfileCheck:"",
        AddOnOnlinePrice: 1,
        AddOnOnlinePriceY:0,
        AddOnStoragePrice: 2,
        AddOnStoragePriceY:0,
        AddOnProfilePrice: 2,
        AddOnProfilePriceY:0,
        AddOnOnlineDisplay:"d-none",
        AddOnStorageDisplay:"d-none",
        AddOnProfileDisplay: "d-none",
        OnlineFinalPriceM: 0,
        OnlineFinalPriceY: 0,
        StorageFinalPriceM: 0,
        StorageFinalPriceY: 0,
        ProfileFinalPriceM: 0,
        ProfileFinalPriceY: 0,
        invisible: "invisible",
        NameLength: "",
        EmailLength:"",
        PhoneLength:"",
        NameAlert: "",
        MailAlert: "",
        PhoneAlert: "",
        nameError: "",
        mailError:"",
        phoneError:"",
    })


    const [form, setForm] = useState({
        page:0,
        name: "",
        email: "",
        phone:""
})
    const DisplayPage = () => {
         

    if (form.page===0) {
            return <PersonalInfo state={state } form={form} setForm={setForm}   />
        } else if (form.page === 1) {
            return <Plan state={state} dispatch={dispatch} />
        } else if (form.page === 2) {
            return <AddOn state={state} dispatch={dispatch}  toggle={toggle } setToggle={setToggle} />
        } else if (form.page === 3) {
            return <Summary state={state} dispatch={dispatch} />
        } else  {
            return <End/>
    }
        
    };

    function handleNext() {
        if (form.page===0 && form.name.length===0) {
           dispatch({type:"NameinfoAlert"})
            
        } else if (form.page === 0 && form.email.length === 0) {
            dispatch({type:"EmailinfoAlert"})
        } else if (form.page === 1 && state.plan === "") {
           alert("please select a plan")
        }
        else {
            setForm({ ...form, page: form.page + 1 })
            dispatch({ type: "noNameinfoAlert" })
        }
        
    }
    
    return (
        <div   className="container-fluid body ">
            <div  className="row vh-100 p-md-3">
                <ul className="sidee col-12 col-md-4 p-md-5 p-5 d-md-block d-flex justify-content-center align-items-start  ">
                    <li className='Main-Box  d-flex align-items-center '>
                        <div className={`number ${form.page===0?"active":""}  d-flex align-items-center justify-content-center p-3 me-md-3 mx-md-0 mx-2 `}>1</div>
                        <div className='text d-md-block d-none'>
                            <span className='step'>Step 1</span>
                            <div className='info'>Your Info</div>
                        </div>
                    </li>
                     <li className='Main-Box d-flex align-items-center '>
                        <div className={`number ${form.page===1?"active":""} d-flex align-items-center justify-content-center p-3 me-md-3 mx-md-0 mx-2 `}>2</div>
                        <div className='text d-md-block d-none'>
                            <span className='step'>Step 2</span>
                            <div className='info'>Select Plan</div>
                        </div>
                    </li>
                     <li className='Main-Box d-flex align-items-center '>
                        <div className={`number ${form.page===2?"active":""} d-flex align-items-center justify-content-center p-3 me-md-3 mx-md-0 mx-2`}>3</div>
                        <div className='text d-md-block d-none'>
                            <span className='step'>Step 3</span>
                            <div className='info'>ADD-ONS</div>
                        </div>
                    </li>
                     <li className='Main-Box d-flex align-items-center '>
                        <div className={`number ${form.page===3 || form.page===4?"active":""} d-flex align-items-center justify-content-center p-3 me-md-3 mx-md-0 mx-2`}>4</div>
                        <div className='text d-md-block d-none'>
                            <span className='step'>Step 4</span>
                            <div className='info'>SUMMARY</div>
                        </div>
                    </li>
                </ul>
                <div className='col-md-8 formcon col-10 mx-auto p-md-0 p-3  position-relative   '>
                   <div > <DisplayPage /></div>
                     <div className={`control p-md-3 p-5 col-md-12 d-flex justify-content-between align-items-center p-md-5 control   ${form.page>3?"d-none":""}`}>
                        {form.page===0 || form.page===4?"": <button onClick={()=>setForm({...form,page:form.page-1})} className='back col-md-3 col-4'>Go Back</button>}
                        {form.page===3? <button onClick={()=>handleNext()} type='submit'  className='next ms-auto col-md-2 col-4 p-2 text-center py-md-3 confirm'>Confirm</button>:state.page===4?"":<button type='submit' onClick={()=>handleNext()} className='next ms-auto col-md-2 col-4 p-2 text-center py-md-3'>Next Step</button>}
                </div>
                </div>
               
            </div>
     </div>
    )
}
export default Form

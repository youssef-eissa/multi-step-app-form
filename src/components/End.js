import endImg from './images/icon-thank-you.svg'
function End() {
    return (
        <div className="container end   ">
            <div className="row  ">
                <div className="col-12 text-center position-absolute translate-middle start-50 top-50 end">
                          <div className='imagee mb-md-5 mb-2' >
                        <img className='col-3 col-md-2' src={ endImg} alt='ThankYou' />
                    </div>
                    <h1>Thank you!</h1>
                    <p className='col-6 mx-md-auto w-100  '>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
            </div>

        </div>
    )
}
export default End
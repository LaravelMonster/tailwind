import React from 'react'

export default props => (
    <div className="w-full animated fadeIn p-1 lg:p-8 md:p-4 flex flex-wrap overflow-hidden" style={{ background: 'url(/images/footer-contact-bg.jpg)' }}>
        <div className="w-full flex lg:p-8 flex-wrap justify-center">
            <div className="w-full animated slideInLeft md:w-1/2 lg:w-1/3 md:p-2 pt-8">
                <div className="flex bg-grey-lightest py-2 px-6">
                    <div className="bg-red rounded-full rounded-tl-none h-16 w-16"><i className="m-6 fa fa-envelope text-white"></i></div>
                    <div className="w-5/6 pl-4 pb-2"><h3 className="mt-3 mb-1 text-grey-darkest">Email</h3><a href="mailto:summonshr@gmail.com" className="no-underline text-sm text-blue-dark">summonshr@gmail.com</a></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 md:p-2 pt-8">
                <div className="flex animated bounceInDown bg-grey-lightest py-2 px-4 md:px-6">
                    <div className="bg-red rounded-full rounded-tl-none h-16 w-16"><i className="m-6 fa fa-globe text-white"></i></div>
                    <div className="w-5/6 pl-4 pb-2">
                        <h3 className="mt-3 mb-1 text-grey-darkest">Address</h3>
                        <a href="mailto:summonshr@gmail.com" className="no-underline text-blue-dark">Kathmandu, Nepal</a>
                    </div>
                </div>
            </div>
            <div className="w-full  animated slideInRight md:w-1/2 lg:w-1/3 md:p-2 pt-8 pb-8">
                <div className="flex bg-grey-lightest py-2 px-6">
                    <div className="bg-red rounded-full rounded-tl-none h-16 w-16"><i className="m-6 fa fa-phone text-white"></i></div>
                    <div className="w-5/6 pl-4 pb-2"><h3 className="mt-3 mb-1 text-grey-darkest">Phone</h3><a href="mailto:summonshr@gmail.com" className="no-underline text-blue-dark">9841145614</a></div>
                </div>
            </div>
        </div>
    </div>
)
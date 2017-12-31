import React from 'react';

export default props => (
    <div className="recent-blog animated fadeIn bg-grey-lighter">
        <div className="blog-header pt-4 text-center">
            <h2 className="text-center pb-6">Recent Blog</h2>
            <div className="underline mx-auto w-24 border-b-2 border-yellow mb-2"></div>
            <div className="underline mx-auto w-16 border-b-2 border-yellow"></div>
            <p className="w-full text-center md:w-3/5 py-2 md:p-8 mx-auto text-grey-darker">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin gravida
nibh vel velit auctor</p>
        </div>
        <div className="blog-content flex flex-wrap pb-4 p-0 md:p-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
                <div className="card shadow rounded-b-sm cursor-pointer">
                    <div className="card-image relative">
                        <div className="z-10 absolute w-16 pin-b pin-r mr-6 mb-6">
                            <span className="number bg-white w-16 text-center block py-3 rounded-t ">08</span>
                            <span className="number bg-yellow w-16 block py-3 text-center">Aug</span>
                        </div>
                        <img style={{ transition: 'transform 0.5s ease' }} className="rounded-t-lg" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/news9-768x576.jpg"
                            alt="" />
                    </div>
                    <div className="card-content p-8">
                        <h2 className="font-light mb-6">Wooden Bridge</h2>
                        <p className="text-grey-dark md:pr-6">
                            Nam vitae placerat turpis. Nullam et diam vel dolor pretium vehicula sed at quam. Donec...
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
                <div className="card shadow rounded-b-sm cursor-pointer">
                    <div className="card-image relative">
                        <div className="z-10 absolute w-16 pin-b pin-r mr-6 mb-6">
                            <span className="number bg-white w-16 text-center block py-3 rounded-t ">08</span>
                            <span className="number bg-yellow w-16 block py-3 text-center">Aug</span>
                        </div>
                        <img style={{ transform: "transform 0.5s ease" }} className="rounded-t-lg" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/news9-768x576.jpg"
                            alt="" />
                    </div>
                    <div className="card-content p-8">
                        <h2 className="font-light mb-6">Future Engineers</h2>
                        <p className="text-grey-dark md:pr-6">
                            Nam vitae placerat turpis. Nullam et diam vel dolor pretium vehicula sed at quam. Donec...
    </p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
                <div className="card shadow rounded-b-sm cursor-pointer">
                    <div className="card-image relative">
                        <div className="z-10 absolute w-16 pin-b pin-r mr-6 mb-6">
                            <span className="number bg-white w-16 text-center block py-3 rounded-t ">08</span>
                            <span className="number bg-yellow w-16 block py-3 text-center">Aug</span>
                        </div>
                        <img style={{ transform: "transform 0.5s ease" }} className="rounded-t-lg" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/news9-768x576.jpg"
                            alt="" />
                    </div>
                    <div className="card-content p-8">
                        <h2 className="font-light mb-6">Project Planning</h2>
                        <p className="text-grey-dark md:pr-6">
                            Nam vitae placerat turpis. Nullam et diam vel dolor pretium vehicula sed at quam. Donec...
    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
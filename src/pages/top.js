import React from 'react';

export default props => (
    <header className="animated fadeIn box">
        <div className="top w-full bg-grey-darkest inline-block">
            <div className="w-full md:w-2/3 sm:pt-2 md:pr-2 md:pr-8 border-b md:border-none border-grey text-center md:float-right lg:float-right quick-contact">
                <ul className="list-reset text-center sm:inline-block md:float-right md:pr-8">
                    <li className="py-1 pl-2 pt-3 sm:pt-1 sm:float-left"><i className="fa fa-phone text-yellow-dark mr-1 lg:mr-2"></i><a className="text-grey text-sm no-underline hover:text-yellow-dark"
                        href="tel:+9779841145614">+9779841145614</a></li>
                    <li className="py-1 pl-2 sm:float-left"><i className="fa fa-envelope  text-yellow-dark mr-1 lg:mr-2"></i><a className="text-grey text-sm no-underline hover:text-yellow-dark"
                        href="mailto:laravelmonster@gmail.com">laravelmonster@gmail.com</a></li>
                    <li className=" py-1 pl-2 pb-3 sm:float-left"><i className="fa fa-globe  text-yellow-dark mr-1 lg:mr-2"></i><a className="text-grey text-sm no-underline hover:text-yellow-dark"
                        href="">Lalitpur, Nepal</a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/3  md:pl-8 float-left py-3">
                <ul className="list-reset text-center md:text-left md:pl-8">
                    <li className="inline px-3 hover:bg-blue-darker py-2 rounded-full"><a href=""><i className="fa text-grey-light fa-facebook"></i></a></li>
                    <li className="inline px-2 hover:bg-blue-light py-2 rounded-full"><a href=""><i className='fa text-grey-light fa-twitter'></i></a></li>
                    <li className="inline px-2 hover:bg-blue py-2 rounded-full"><a href=""><i className='fa text-grey-light fa-linkedin'></i></a></li>
                    <li className="inline px-2 hover:bg-blue py-2 rounded-full"><a href=""><i className='fa text-grey-light fa-wordpress'></i></a></li>
                    <li className="inline px-2 hover:bg-red py-2 rounded-full"><a href=""><i className='fa text-grey-light fa-youtube'></i></a></li>
                </ul>
            </div>
        </div>
    </header>
);
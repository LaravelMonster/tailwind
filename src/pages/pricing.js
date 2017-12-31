import React from 'react';

export default (props) => <div className="animated fadeIn box w-full sm:block bg-no-repeat pt-8" style={{ backgroundImage: 'url(/green-gradient.jpg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
    <div className="flex flex-wrap max-w-xl mx-auto mb-8">
        <div className="w-full px-8 sm:px-0 sm:w-1/3 py-8">
            <div className="header border-b-2 mt-2 rounded-none sm:rounded-tl-lg bordery-grey bg-grey-darker py-3">
                <h3 className="text-center text-grey-lightest py-2">Standard</h3>
                <p className="text-center text-grey-light">$29/month</p>
            </div>
            <div className="content bg-white">
                <ul className="list-reset">
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">2</span> Financial accounts</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">1</span> user</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">3GB</span> of file storage</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Multiple cash flow views</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Reports</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Enhanced SSL security</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Quickbooks online cash on hand</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Currency Conversion</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey w-full">Advanced User Permissions</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Best for Personal Use</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">30-day free trial</a></li>
                </ul>
            </div>
            <div className="footer sm:rounded-bl-lg text-grey-darkest bg-grey py-6 flex w-full justify-center">
                <a href="/" className="no-underline block w-full text-center text-grey-darkest">
                    Sign Up
                </a>
            </div>
        </div>
        <div className="w-full  px-8 sm:px-0 sm:w-1/3 ">
            <div className="header border-b-2  rounded-none sm:rounded-t-lg bordery-grey bg-grey-darkest py-3">
                <p className="text-center text-grey-lightest py-2 text-green">Great value</p>
                <h3 className="text-center text-grey-lightest py-2 font-extrabold text-2xl">Plus</h3>
                <p className="text-center text-grey-light">$29/month</p>
            </div>
            <div className="content bg-white">
                <ul className="list-reset">
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">20</span> Financial accounts</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">10</span> user</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">30GB</span> of file storage</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Multiple cash flow views</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Reports</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Enhanced SSL security</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Quickbooks online cash on hand</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Currency Conversion</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Advanced User Permissions</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Ideas for small busnesses</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">30-day free trial</a></li>
                </ul>
            </div>
            <div className="footer text-grey-darkest bg-green-dark py-8 sm:rounded-b-lg flex w-full justify-center">
                <a href="/" className="no-underline block w-full text-center text-2xl text-white">
                    Sign Up
                </a>
            </div>
        </div>
        <div className="w-full  px-8 sm:px-0 sm:w-1/3 py-8">
            <div className="header border-b-2 mt-2  rounded-none sm:rounded-tr-lg bordery-grey bg-grey-darker py-3">
                <h3 className="text-center text-grey-lightest py-2">Premium</h3>
                <p className="text-center text-grey-light">$199/month</p>
            </div>
            <div className="content bg-white">
                <ul className="list-reset">
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">60</span> Financial accounts</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">20</span> user</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full"><span className="text-black font-bold">300GB</span> of file storage</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Multiple cash flow views</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Reports</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Enhanced SSL security</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Quickbooks online cash on hand</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Currency Conversion</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Advanced User Permissions</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">Best for Personal Use</a></li>
                    <li className="border-grey border-b flex w-full"><a href="" className="block  py-4 no-underline text-center text-grey-darkest w-full">30-day free trial</a></li>
                </ul>
            </div>
            <div className="footer sm:rounded-br-lg text-grey-darkest bg-grey py-6 flex w-full justify-center">
                <a href="/" className="no-underline block w-full text-center text-grey-darkest">
                    Sign Up
                </a>
            </div>
        </div>
    </div>
</div>
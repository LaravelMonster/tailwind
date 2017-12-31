import React from 'react';

export default props => (
    <div className="services animated fadeIn flex flex-wrap bg-grey-lightest pt-8 mt-8sm:px-2 md: mx-8 ">
        <div className="w-full md:w-1/3 pt-8 mt-8 inline-block">
            <div className="w-full mb-8">
                <div className="w-4/5 pr-8 text-right inline-block">
                    <h4 className="font-normal text-2xl mb-6">Architect Services</h4>
                    <p className="pl-6 text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
                <div className="align-top w-1/6 inline-block">
                    <div className="shadow h-20 text-center bg-grey-lighter p-4  text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-home"></i></div>
                </div>
            </div>
            <div className="w-full mb-8">
                <div className="w-4/5 pr-8 text-right inline-block">
                    <h4 className="font-normal text-2xl mb-6">Carpeting Services</h4>
                    <p className="pl-6 text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
                <div className="w-1/6 align-top inline-block">
                    <div className="shadow h-20 text-center bg-grey-lighter p-4  text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-scissors"></i></div>
                </div>
            </div>
            <div className="w-full mb-8">
                <div className="w-4/5 pr-8 text-right inline-block">
                    <h4 className="font-normal text-2xl mb-6">Building Construction</h4>
                    <p className="pl-6 text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
                <div className="align-top w-1/6 inline-block">
                    <div className="shadow h-20 text-center bg-grey-lighter p-4  text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-building-o"></i></div>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/3 text-center align-top mx-auto inline-block">
            <img width="300" src="http://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/service-man.png"
                alt="" />
        </div>
        <div className="w-full md:w-1/3 pt-8 mt-8 inline-block">
            <div className="w-full mb-8">
                <div className="align-top w-1/6 inline-block">
                    <div className="shadow  h-20 bg-grey-lighter p-4  text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-home"></i></div>
                </div>
                <div className="w-4/5 text-left pl-8 inline-block">
                    <h4 className="font-normal text-2xl mb-6">Architect Services</h4>
                    <p className="text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
            </div>
            <div className="w-full mb-8">
                <div className="align-top w-1/6 inline-block">
                    <div className="shadow  h-20 bg-grey-lighter p-4  text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-scissors"></i></div>
                </div>
                <div className="w-4/5 text-left pl-8 inline-block">
                    <h4 className="font-normal text-2xl mb-6">Carpeting Services</h4>
                    <p className="text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
            </div>
            <div className="w-full mb-8">
                <div className="align-top w-1/6 inline-block">
                    <div className="shadow  h-20 bg-grey-lighter p-4  text-center text-center text-3xl rounded-full text-yellow-dark"><i className="fa fa-building-o"></i></div>
                </div>
                <div className="w-4/5 text-left pl-8 inline-block">
                    <h4 className="font-normal text-2xl mb-6">Building Construction</h4>
                    <p className="text-grey-darker text-sm">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin...</p>
                </div>
            </div>
        </div>
    </div>
)
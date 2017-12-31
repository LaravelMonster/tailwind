import React from 'react';

export default props => (
    <div className="ongoing-project animated fadeIn bg-white">
        <div className="project-header pt-8 text-center flex flex-wrap justify-center">
            <h2 className="w-full text-center pb-6 text-grey-darker text-3xl">Ongoing projects</h2>
            <div className="w-full flex flex-wrap justify-center">
                <div className="underline w-32 border-b-2 border-blue mb-2"></div>
            </div>
            <div className="w-full flex flex-wrap justify-center">
                <div className="underline w-24 border-b-2 border-blue"></div>
            </div>
            <p className="w-full leading-loose md:w-3/5 p-8 text-xl text-grey-darker">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit.Proin gravida
nibh vel velit auctor</p>
        </div>
        <div className="projects-container flex flex-wrap p-8">
            <div className="w-1/3 p-8">
                <div className="flex flex-wrap relative">
                    <div style={{ backgroundColor: '#fafdfce0' }} className="w-full py-8 flex flex-wrap justify-center absolute pin-b ">
                        <h4 className="w-full text-normal md:text-3xl  font-normal text-center">Apartment in Boston</h4>
                        <p className="w-full py-4 pb-6 text-sm md:text-sm text-grey-darkest text-center">Lorm ipsum dolor sit amet, sed et inani accusam fastidii, vocent delenit...</p>
                        <button className="p-8 py-4 capitalize bg-yellow-darkest text-white hover:bg-black rounded">Know More</button>
                    </div>
                    <img class="w-full h-full" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/portfolio8-min-380x360.jpg"
                        alt="" />
                </div>
            </div>
            <div className="w-1/3 p-8">
                <div className="flex flex-wrap relative">
                    <div style={{ backgroundColor: '#fafcfce0' }} className="w-full py-8 flex flex-wrap justify-center absolute pin-b ">
                        <h4 className="w-full text-normal md:text-3xl  font-normal text-center">Hospital in china</h4>
                        <p className="w-full py-4 pb-6 text-sm md:text-sm text-grey-darkest text-center">Lorm ipsum dolor sit amet, sed et inani accusam fastidii, vocent delenit...</p>
                        <button className="p-8 py-4 capitalize bg-yellow-darkest text-white hover:bg-black rounded">Know More</button>
                    </div>
                    <img class="w-full h-full" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/portfolio5-min-380x360.jpg"
                        alt="" />
                </div>
            </div>
            <div className="w-1/3 p-8">
                <div className="flex flex-wrap relative">
                    <div style={{ backgroundColor: '#fafcfce0' }} className="w-full py-8 flex flex-wrap justify-center absolute pin-b ">
                        <h4 className="w-full text-normal md:text-3xl  font-normal text-center">Bank building in japan</h4>
                        <p className="w-full py-4 pb-6 text-sm md:text-sm text-grey-darkest text-center">Lorm ipsum dolor sit amet, sed et inani accusam fastidii, vocent delenit...</p>
                        <button className="p-8 py-4 capitalize bg-yellow-darkest text-white hover:bg-black rounded">Know More</button>
                    </div>
                    <img class="w-full h-full" src="https://demo.wenthemes.com/construction-base-pro/wp-content/uploads/sites/46/2017/08/portfolio3-min-380x360.jpg"
                        alt="" />
                </div>
            </div>
        </div>
    </div>
)
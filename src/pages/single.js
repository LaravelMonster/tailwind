import React from 'react';
export default props => (
    <div class="flex flex-wrap justify-center">
        <div class="w-full max-w-sm p-8 animated fadeIn">
            <div class="p-2">
                <div className="border shadow">
                    <div className="w-full relative">
                        <img src="https://demo.wenthemes.com/nature-bliss/wp-content/uploads/sites/43/2017/05/post-1-380x253.png" alt="" />
                        <div className="absolute pin-l pin-b pl-8">
                            <div className="text-grey-darker bg-grey-lighter py-3 px-4 w-20 font-extrabold text-xl text-center">17</div>
                            <div className="bg-green text-white py-3 px-4 w-20 font-bold">May</div>
                        </div>
                    </div>
                    <div className="border-t-4 -mt-1 border-green w-full flex flex-wrap justify-center pb-8 bg-green-lightest">
                        <h3 class="w-full p-4 text-center text-grey-darkest">Enjoying in the park</h3>
                        <div className="border-b-2 border-green w-24"></div>
                        <p className="p-4 text-center text-grey-dark">Aenean sed est ultricies, interdum urna ut, sollicitudin ipsum. Mauris ut turpis tincidunt, hendrerit nibh...</p>
                        <button className="px-6 py-4 text-white bg-green-dark rounded">KNOW MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
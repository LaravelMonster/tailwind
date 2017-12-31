import React from 'react'

export default props => (<div className="animated fadeIn box flex flex-wrap justify-center p-8">
    <div className="border-2 border-red rounded-sm questions p-8 w-3/5">
    <div className="w-full flex justify-between border-b-2 border-red pb-6 header-question">
        <p className="text-grey-darkest">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nisi, fugit deleniti animi maxime velit dolorem
            facere sint repellendus alias molestias officia sed aperiam quos temporibus aut mollitia nihil autem.</p>
        <p>
            <i title="This place will provide lots of hint" className="fa cursor-pointer fa-info-circle text-red"></i>
        </p>
    </div>
    <div className="w-full question-options border-b border-red-light mb-6 py-4">
        <div className="option border p-3 my-3 shadow-md cursor-pointer border-grey-dark rounded-sm ">
            <p className="text-grey-darkest">
                In pariatur magna ut mollit anim aliqua reprehenderit do dolore culpa anim nostrud.
            </p>
        </div>
        <div className="option flex justify-between border p-3 my-3 shadow-md cursor-pointer border-grey-dark rounded-sm ">
            <p className="text-grey-darkest">
                Et nostrud pariatur do veniam dolor veniam.
            </p>
            <i className="fa fa-check-circle text-green" aria-hidden="true"></i>
        </div>
        <div className="option border p-3 my-3 shadow-md cursor-pointer border-grey-dark rounded-sm ">
            <p className="text-grey-darkest">
                Cillum consectetur incididunt fugiat voluptate voluptate occaecat est minim voluptate incididunt magna.
            </p>
        </div>
        <div className="option flex justify-between border p-3 my-3 shadow-md cursor-pointer border-grey-dark rounded-sm ">
            <p className="text-grey-darkest">
                Ad ut magna enim excepteur culpa cillum.
            </p>
        </div>
    </div>
    <div className="w-full flex justify-between navigations">
        <a href="" className="py-2 px-4 rounded-sm no-underline bg-red-dark text-grey-light">Prev</a>
        <a href="" className="bg-red p-2 px-3 rounded-full text-white no-underline">2</a>
        <a href="" className="py-2 px-4 rounded-sm no-underline bg-red-dark text-grey-light">Next</a>
    </div>
    </div>
</div>);
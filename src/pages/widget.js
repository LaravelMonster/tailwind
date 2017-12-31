import React from 'react';

export default props => (
    <div className="animated fadeIn box flex flex-wrap mx-auto  m-8 max-w-xs">
        <div className="widget w-full border-l-2 border-red rounded-sm">
            <h3 className="text-normal font-normal bg-red-dark px-2 widget-title text-white border-b border-blue py-2 text-grey-darkest">
                Widget title
            </h3>
            <ul className="list-reset widget-content">
                <li className="w-full py-2 px-2 border-b border-red-lighter border-dotted"><a href="" className="no-underline block text-red-dark">Link 1</a></li>
                <li className="w-full py-2 px-2 border-b border-red-lighter border-dotted"><a href="" className="no-underline block text-red-dark">Link 1</a></li>
                <li className="w-full py-2 px-2 border-b border-red-lighter border-dotted"><a href="" className="no-underline block text-red-dark">Link 1</a></li>
            </ul>
        </div>
    </div>
);
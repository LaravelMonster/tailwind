import React from 'react';
import { Link } from 'react-router-dom';
export default (props) => {
    return <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2  border-b-2 border-red">
        <Link className="no-underline text-grey-darkest" to={props.link}>
            <img src={props.src || 'https://www.hsjaa.com/images/joomlart/demo/default.jpg'} alt="" />
            <p className="text-center">{props.text}</p>
        </Link>
    </div>;
}
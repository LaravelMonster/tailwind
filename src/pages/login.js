import React from 'react'

export default props => (<div className="animated fadeIn box flex flex-wrap justify-center p-8">
    <div class="max-w-sm flex flex-wrap border border-red rounded-sm shadow-lg bg-grey-lightest  border-t-4 p-8">
        <div className="w-full text-center">
            <h3 className="text-grey-darkest">Log In</h3>
        </div>
        <p className="py-2 text-sm">E-mail address</p>
        <input type="text" className="w-full h-10 rounded-sm border-grey-light  border-2" />
        <p className="py-2 text-sm">Password</p>
        <input type="password" className="w-full h-10 rounded-sm border-grey-light  border-2" />
        <label className="w-full pt-4 text-grey-darkest text-sm cursor-pointer">
            <input type="checkbox" name="" id="" /> Remember Me
        </label>
        <div className="flex w-full justify-between pt-4">
            <button className="py-2 px-3 bg-red text-white rounded-sm">Login</button>
            <a href="" className="no-underline my-2 text-grey-dark border-b border-red text-red">Forgot your password?</a>
        </div>
    </div>
</div>);
import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'

export default function Login(props) {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/login', values);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {props.errors.email && <div>{props.errors.email}</div>}
                    <form onSubmit={handleSubmit} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="email" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={values.email} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={values.password} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Sign in
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

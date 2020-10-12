import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import AppLayout from "../Layouts/AppLayout";

export default function CreateList(props) {

    const [values, setValues] = useState({
        name: props.name,
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
        Inertia.post('/lists', values);
    };

    return (
        <AppLayout title="Create list">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <h2 className="mb-8 text-2xl leading-9 font-extrabold text-gray-900">
                    Create a new list
                </h2>
                {props.errors.name && <div>{props.errors.name}</div>}
                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                            Name
                        </label>
                        <div className="mt-1 rounded-md shadow-sm">
                            <input id="name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={values.name} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Create list
                        </button>
                    </span>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}

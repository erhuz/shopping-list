import React from 'react'

export default function ItemList() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div>Söndag, 4 Oktober 2020</div>
                                <span className="inline-flex rounded-md shadow-sm">
                                    <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Dela
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="candidates" type="checkbox"
                                               className="form-checkbox h-4 w-4 text-green-400 transition duration-150 ease-in-out"
                                               checked />
                                    </div>
                                    <div className="ml-3 text-sm leading-5">
                                        <label htmlFor="candidates"
                                               className="font-medium text-gray-700 line-through">Mjölk</label>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="candidates" type="checkbox"
                                               className="form-checkbox h-4 w-4 text-green-400 transition duration-150 ease-in-out" />
                                    </div>
                                    <div className="ml-3 text-sm leading-5">
                                        <label htmlFor="candidates"
                                               className="font-medium text-gray-700">Yoghurt</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                            <div>
                                <input id="street_address"
                                       className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                       placeholder="Mjölk, kaffe, tv..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


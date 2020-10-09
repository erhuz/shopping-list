import React from 'react'
import ListItem from './ListItem'

export default function ItemList({ name, items, handleChange }) {

    const listItems = items.map((item) =>
        <ListItem key={item.id.toString()}
                  item={item}
                  handleChange={handleChange}
        />
    );

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div>{name}</div>
                                <span className="inline-flex rounded-md shadow-sm">
                                    <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Dela
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <div className="space-y-6">
                                {listItems}
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


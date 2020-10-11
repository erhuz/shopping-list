import React from 'react'

export default function ListItem({ item, updateItem }) {

    const id = `id-${item.id}`;

    return (
        <div className="flex justify-between">
            <div className="flex items-center h-5">
                <input id={id} type="checkbox"
                       className="form-checkbox h-4 w-4 text-green-400 transition duration-150 ease-in-out"
                       checked={item.completed}
                       onChange={(e) => updateItem(item, e)}
                />
            </div>
            <div className="ml-3 text-sm leading-5">
                <label htmlFor={id} className={`font-medium text-gray-700${item.completed ? ' line-through' : ''}`}>
                    {item.name}
                </label>
            </div>
            <span className="inline-flex rounded-md shadow-sm">
                <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                    <svg class="h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
            </span>
        </div>
    )
}


import React from 'react'

export default function Item({ item }) {

    const id = `id-${item.id}`;

    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input id={id} type="checkbox"
                       className="form-checkbox h-4 w-4 text-green-400 transition duration-150 ease-in-out"
                       checked={item.completed} />
            </div>
            <div className="ml-3 text-sm leading-5">
                <label htmlFor={id} className={`font-medium text-gray-700${item.completed ? ' line-through' : ''}`}>
                    {item.name}
                </label>
            </div>
        </div>
    )
}


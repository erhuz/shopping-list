import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'

export default function GroceryInput ({id}) {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (value) => {
        setSearchInput(value);
    }

    const handleSubmit = (event) => {
        if (event.charCode === 13) {
            Inertia.post(`/api/item-lists/${id}/list-item`, {
                name: this.state.search_input
            });
        }
    }

    return (
        <div>
            <input
                onChange={(event) => {handleChange(event.target.value)}}
                onKeyPress={(event) => {handleSubmit(event)}}
                className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                id="street_address"
                placeholder="Mjölk, kaffe, tv..."
            />
        </div>
    )
}

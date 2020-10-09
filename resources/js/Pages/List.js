import React, { useState } from 'react'
import AppLayout from './../Layouts/AppLayout'
import ItemList from './../Components/ItemList'
import { Inertia } from '@inertiajs/inertia'

export default function List(props) {

    const [items, setItems] = useState([...props.items]);

    const handleChange = (item, event) => {
        const itemIndex = items.findIndex(element => element.id === item.id);

        const updatedItems = [...items];
        updatedItems[itemIndex].completed = !item.completed;

        const updatedItem = updatedItems[itemIndex];

        setItems(updatedItems);

        Inertia.put(`/api/list-item/${updatedItem.id}`, updatedItem);
    };

    return (
        <AppLayout title="List">
            <ItemList name={props.name} items={items} handleChange={handleChange} />
        </AppLayout>
    )
}

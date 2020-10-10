import React, { useState, useEffect } from 'react'
import AppLayout from './../Layouts/AppLayout'
import ItemList from './../Components/ItemList'
import { Inertia } from '@inertiajs/inertia'

export default function List(props) {

    const [items, setItems] = useState([...props.items]);

    const updateItem = (item, event) => {
        const itemIndex = items.findIndex(element => element.id === item.id);

        const newItems = [...items];
        newItems[itemIndex].completed = !item.completed;

        setItems(newItems);

        Inertia.put(`/api/list-item/${item.id}`, newItems[itemIndex]);
    };

    return (
        <AppLayout title="List">
            <ItemList id={props.id} name={props.name} items={items} updateItem={updateItem} />
        </AppLayout>
    )
}

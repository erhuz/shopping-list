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

        Inertia.put(`/items/${item.id}`, newItems[itemIndex]);
    };

    const createItem = (item, event) => {
        //TODO: Create temporary item with loading symbol.
        // const newItems = [...items];
        // newItems.push(item);
        // setItems(newItems);

        Inertia.post(`/lists/${props.id}/items`,{
            name: item.name
        })

    };

    const deleteItem = (item, event) => {
        Inertia.delete(`/items/${item.id}`, item);
    };

    return (
        <AppLayout title="List">
            <ItemList id={props.id} name={props.name} items={props.items} updateItem={updateItem} createItem={createItem} deleteItem={deleteItem} />
        </AppLayout>
    )
}

import React, { useState, useEffect } from 'react'
import AppLayout from './../Layouts/AppLayout'
import ItemList from './../Components/ItemList'
import { Inertia } from '@inertiajs/inertia'

export default function List(props) {

    useEffect(() => {
        const interval = setInterval(() => {
            Inertia.reload({ only: ['items']});
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (item, event) => {
        const itemIndex = props.items.findIndex(element => element.id === item.id);

        const updatedItem = props.items[itemIndex];
        updatedItem.completed = !item.completed;

        Inertia.put(`/api/list-item/${updatedItem.id}`, updatedItem);
    };

    return (
        <AppLayout title="List">
            <ItemList name={props.name} items={props.items} handleChange={handleChange} />
        </AppLayout>
    )
}

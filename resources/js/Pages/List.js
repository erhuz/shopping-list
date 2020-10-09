import React, { useState } from 'react'
import AppLayout from './../Layouts/AppLayout'
import ItemList from './../Components/ItemList'

export default function List(props) {

    const [items, setItems] = useState([...props.items]);

    const handleChange = (item, event) => {
        const itemIndex = items.findIndex(element => element.id === item.id);

        const updatedItems = [...items];
        updatedItems[itemIndex].completed = !item.completed;

        setItems(updatedItems);
    };

    return (
        <AppLayout title="List">
            <ItemList name={props.name} items={items} handleChange={handleChange} />
        </AppLayout>
    )
}

import React from 'react'
import AppLayout from './../Layouts/AppLayout'
import ListList from './../Components/ListList'

export default function Home(props) {
    return (
        <AppLayout title="Home">
            <ListList lists={props.lists}/>
        </AppLayout>
    )
}

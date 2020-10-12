import React from 'react'
import AppLayout from './../Layouts/AppLayout'
import ListList from './../Components/ListList'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function Home(props) {
    return (
        <AppLayout title="Home">
            <ListList lists={props.lists}/>
            <div className="mt-5">
                <span className="inline-flex rounded-md shadow-sm">
                    <InertiaLink href="/lists/create" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                        Create list
                    </InertiaLink>
                </span>
            </div>
        </AppLayout>
    )
}

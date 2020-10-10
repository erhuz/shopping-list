import React, { useState } from 'react'
import { InertiaLink } from "@inertiajs/inertia-react";

export default function ListList(props) {

    const listListItems = props.lists.map((list) => {
       return (
           <tr key={list.id.toString()}>
               <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                   <InertiaLink href={`/lists/${list.id}`}>{list.name}</InertiaLink>
               </td>
               <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                   <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
               </td>
           </tr>
       );
    });

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {listListItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


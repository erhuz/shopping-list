import React, { useState, useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function AppLayout({ title, children }) {

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
            <div className={`${sidebarIsOpen ? '' : 'hidden'}`}>
                <div className="fixed inset-0 flex z-40">
                    <div className="fixed inset-0">
                        <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                    </div>
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                        <div className="absolute top-0 right-0 -mr-14 p-1">
                            <button
                                className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                                aria-label="Close sidebar"
                                onClick={() => setSidebarIsOpen(false)}>
                                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg" alt="Workflow" />
                            </div>
                            <nav className="mt-5 px-2 space-y-1">
                                <InertiaLink href="/home"
                                   className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                                    <svg className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    My Lists
                                </InertiaLink>
                            </nav>
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-14">
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="pr-1 pt-1 sm:pl-3 sm:pt-3 self-end sm:self-start">
                    <button
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                        aria-label="Open sidebar"
                        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex="0">
                    <div className="pt-2 pb-6 md:py-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

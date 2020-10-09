import React, { Component } from 'react'

class GroceryInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_input: '',
        }
    }

    handleChange (value) {
        this.setState({search_input: value})
        console.log(this.state.search_input);
    }

    render () {
        return (
            <div>
                <input
                    onChange={(event) => {this.handleChange(event.target.value)}}
                    className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    id="street_address"
                    placeholder="Mjölk, kaffe, tv..."
                />

                {/* <button
                    onClick={() => {console.log('hello-world')}}
                    type="button"
                    className="inline-flex inset-y-0 right-0 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    Lägg till
                </button> */}
            </div>
        )
    }
}

export default GroceryInput;

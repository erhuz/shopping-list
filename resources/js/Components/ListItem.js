import React, { Component } from 'react'
import Swipe from 'react-easy-swipe';

export default class ListItem extends Component {
    constructor (props) {
        super(props);
        console.log(props);

        this.state = {
            isScrolling: false,
            swipeCounter: 0,
            lastPosition: { x: 0, y: 0 },
        }
    }

    onSwipeStart(event) {
      console.log('Start swiping...', event);
      this.setState({swipeCounter: 0, isScrolling: false});
    }


    onSwipeMove(position, event) {
        // TODO:
        // On the first few "swipe instances", determine if user wants to swipe or scroll.
        // if(this.state.swipeCounter < 4 && this.state.swipeCounter > 0){

        // }

      console.log(`Moved ${position.x} pixels horizontally`, event);
      console.log(`Moved ${position.y} pixels vertically`, event);
    }

    onSwipeEnd(event) {
      console.log('End swiping...', event);
    }

    render() {
        const id = `id-${this.props.item.id}`;

        return (

            <div className="flex items-start py-4">
                <div className="flex items-center h-5">
                    <input id={id} type="checkbox"
                        className="form-checkbox h-4 w-4 text-green-400 transition duration-150 ease-in-out"
                        checked={this.props.item.completed}
                        onChange={(e) => this.props.updateItem(this.props.item, e)}
                    />
                </div>
                <Swipe
                    onSwipeMove={this.onSwipeMove}>
                    <div className="ml-3 text-sm leading-5">
                        <label htmlFor={id} className={`font-medium text-gray-700${this.props.item.completed ? ' line-through' : ''}`}>
                            {this.props.item.name}
                        </label>
                    </div>
                </Swipe>
            </div>
        )
    }
}

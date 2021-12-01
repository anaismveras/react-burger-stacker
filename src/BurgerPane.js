import React, { Component } from 'react'
import './ingredients.css';

export default class BurgerPane extends Component {
    render () {
            let burgerImage = this.props.emptyIngredients.map(ingredient => {
                return (
                    <div>
                        {ingredient}
                    </div>
                )
            })
            return (
                <div>
                    <p>Press the Arrow ingredients will be added Here</p>
                    <ul>{burgerImage}</ul>
                    <button onClick={(e) => this.props.clearBurger(e)}>Clear Burger</button>
                </div>
            )
    }
}
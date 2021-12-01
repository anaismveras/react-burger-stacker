import React, { Component } from 'react'
import './ingredients.css';

export default class IngredientList extends Component {

    render () {
        let BurgerIngredients = this.props.ingredients.map((ingredient) => {
            return (
                <div>
                    {ingredient.name}
                    <button onClick={(e) => this.props.addIngredient(e, ingredient.name)}>></button>
                </div>
            )
        })
        return (
            <div>
                <ul>{BurgerIngredients}</ul>
            </div>
        )
    }
}
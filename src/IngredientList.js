import React, { Component } from 'react'

export default class IngredientList extends Component {

    render () {
        let BurgerIngredients = this.props.ingredients.map((ingredient) => {
            return (
                <div>
                    {ingredient.name}
                    <button className='ingredientButton' onClick={(e) => this.props.addIngredient(e, ingredient.name)}>></button>
                </div>
            )
        })
        return (
            <div className='parent'>
                <p>Ingredients</p>
                <br />
                <ul>{BurgerIngredients}</ul>
            </div>
        )
    }
}
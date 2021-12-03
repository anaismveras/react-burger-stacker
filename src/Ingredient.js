// Ingredient is a child of IngredientList
// gets the props of an individual ingredient, color and name
import React, { Component } from 'react'

const Ingredient = props => {
    
        return (
            <p style={{backgroundColor: props.ingredient.color}} onClick={props.clicky}>
                { ingredientss.name }
            </p>
        )
}

export default Ingredient
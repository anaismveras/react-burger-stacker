import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
import './ingredients.css';

export default class Ingredients extends Component {
   state = {
        ingredients: [
           {name: 'Kaiser Bun', color: 'saddlebrown'},
           {name: 'Sesame Bun', color: 'sandybrown'},
           {name: 'Gluten Free Bun', color: 'peru'},
           {name: 'Lettuce Wrap', color: 'olivedrab'},
           {name: 'Beef Patty', color: '#3F250B'},
           {name: 'Soy Patty', color: '#3F250B'},
           {name: 'Black Bean Patty', color: '#3F250B'},
           {name: 'Chicken Patty', color: 'burlywood'},
           {name: 'Lettuce', color: 'lawngreen'},
           {name: 'Tomato', color: 'tomato'},
           {name: 'Bacon', color: 'maroon'},
           {name: 'Onion', color: 'lightyellow'}
         ],
         emptyIngredients: []
   }

   addIngredient = (e, newIng) => {
    e.preventDefault()
    let newIngredient = this.state.emptyIngredients
        newIngredient.unshift(newIng)
    this.setState({
        emptyIngredients: newIngredient
    })
    }

    clearBurger = () => {
        this.setState({
          emptyIngredients: []
        })
      }

    render () {
        return (
            <div>
                <IngredientList ingredients={this.state.ingredients} 
                addIngredient={this.addIngredient}
                />
                <BurgerPane 
                emptyIngredients={this.state.emptyIngredients} 
                clearBurger={this.clearBurger}
                />
            </div>
        )
    }

}
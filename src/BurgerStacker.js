import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = props => {
	const [ingredient] = useState(
		[
	   { name: 'Kaiser Bun', color: 'saddlebrown' },
	   { name: 'Sesame Bun', color: 'sandybrown' },
	   { name: 'Gluten Free Bun', color: 'peru' },
	   { name: 'Lettuce Wrap', color: 'olivedrab' },
	   { name: 'Beef Patty', color: '#3F250B' },
	   { name: 'Soy Patty', color: '#3F250B' },
	   { name: 'Black Bean Patty', color: '#3F250B' },
	   { name: 'Chicken Patty', color: 'burlywood' },
	   { name: 'Lettuce', color: 'lawngreen' },
	   { name: 'Tomato', color: 'tomato' },
	   { name: 'Bacon', color: 'maroon' },
	   { name: 'Onion', color: 'lightyellow' },
	   { name: 'Cheese', color: 'gold' },
   ]
)
   const [burgerIngredients, setburgerIngredients] = useState([])
   const [deleted, setDeleted] = useState(false)

	// add to stack function(maybe passed to child?)
    const addToStack = (e) => {
        // console.log('this is what was clicked', e.target)
        let ingColor = e.target.style.backgroundColor
        // console.log('is this what I want?', e.target.style.backgroundColor)
        let ingName = e.target.innerText
		setburgerIngredients( () => {
			return ([
						{ name: ingName, color: ingColor },
						...burgerIngredients
					])
		}) 
	}

    //remove from stack
    // const removeFromStack = (e) => {
    //     // console.log('old stack', this.state.burgerIngredients)
    //     // let newBurgIngArr = this.state.burgerIngredients.filter(ingrs => ingrs.name != e.target.innerText)
    //     // console.log('new stack', newBurgIngArr)
    //     deleted(true)
    // }

	// clear burger stack function(maybe passed to child?)
    const clearBurger = () => {
        setburgerIngredients([])
    }

		return (
			<main>
				<h1>Burger Stacker</h1>
				<div className='panes'>
					<IngredientList 
                        ingredients={ingredient} 
                        add={addToStack}
                    />
					<BurgerPane 
                        ingredients={burgerIngredients}
                        // remove={removeFromStack}
                        clear={clearBurger}
                    />
				</div>
			</main>
		)
}

export default BurgerStacker
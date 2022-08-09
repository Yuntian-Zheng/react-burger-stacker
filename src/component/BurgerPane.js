import React, { Component } from 'react'
import BurgerStacker from './BurgerStacker'
import Ingredient from './Ingredient'

const BurgerPane = (props) =>{
    let brugerBits = props.ingredients.map((ing, idx) => (
        <li key={idx}>
            <Ingredient
                itemKey={idx}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))
    return (
        <section>
            <h3>Burger Pane</h3>
            <ul>
                {brugerBits}
            </ul>
            <button onClick={props.clear}>Clear</button>
        </section>
        )
}
export default BurgerPane
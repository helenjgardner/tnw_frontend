import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    render() {
        return (
            <div className="Recipe">
                <div className="image-container">
                    <a href={this.props.recipe.recipeUrl} rel="noopener" target="_blank" >
                        <img src={this.props.recipe.recipeImage} alt='' width="50" />  </a>
                </div>
                {/* helen made url a link */}
                <div className="Recipe-Url">
                    <a href={this.props.recipe.recipeUrl} target="_blank"> {this.props.recipe.recipeTitle} </a>
                </div>
                {/* old title */}
                {/* <h2>{this.props.recipe.recipeTitle}</h2> */}

                {/* Helen commented out listing ingredients */}
                {/* <div className="Recipe-information">
                    <div className="Recipe-Ingredients">
                        <ul>{this.props.recipe.recipeIngredients.map(recipe => {
                            return <li> {recipe} </li>
                        })}
                        </ul>
                    </div>
                    <div className="Recipe-Url">
                        <a href={this.props.recipe.recipeUrl}>  </a>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Recipe;